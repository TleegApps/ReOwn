import React, { createContext, useState, useContext, ReactNode } from 'react';
import { validateEmail } from '../utils/validation';
import { supabase } from '../lib/supabase';
import { generateReferralCode, validateReferralCode } from '../utils/referralCode';

interface EmailContextType {
  email: string;
  setEmail: (email: string) => void;
  referralCode: string;
  setReferralCode: (code: string) => void;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  submitEmail: (email: string, referralCodeUsed?: string) => Promise<void>;
}

const EmailContext = createContext<EmailContextType | undefined>(undefined);

interface EmailProviderProps {
  children: ReactNode;
}

export const EmailProvider: React.FC<EmailProviderProps> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitEmail = async (email: string, referralCodeUsed?: string) => {
    // Reset states
    setError(null);
    setIsLoading(true);
    
    // Validate email
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Validate referral code if provided
    if (referralCodeUsed && !validateReferralCode(referralCodeUsed)) {
      setError('Invalid referral code format');
      setIsLoading(false);
      return;
    }
    
    try {
      // Generate a unique referral code for this user
      const userReferralCode = generateReferralCode();
      
      // If a referral code was used, validate it exists and get the referrer
      let referrerData = null;
      if (referralCodeUsed) {
        const { data: existingReferrer, error: referrerError } = await supabase
          .from('waitlist_entries')
          .select('id, email, referrals_made_count')
          .eq('user_referral_code', referralCodeUsed.toUpperCase())
          .maybeSingle();

        if (referrerError || !existingReferrer) {
          setError('Referral code not found. Please check and try again.');
          setIsLoading(false);
          return;
        }
        
        referrerData = existingReferrer;
      }

      // Insert email into Supabase waitlist_entries table
      const { data, error: supabaseError } = await supabase
        .from('waitlist_entries')
        .insert([
          {
            email: email.toLowerCase().trim(),
            user_referral_code: userReferralCode,
            referral_code_used: referralCodeUsed ? referralCodeUsed.toUpperCase() : null,
            referrals_made_count: 0
          }
        ])
        .select();

      if (supabaseError) {
        // Handle duplicate email error
        if (supabaseError.code === '23505') {
          setError('This email is already on the waitlist!');
        } else {
          console.error('Supabase error:', supabaseError);
          setError('Failed to join waitlist. Please try again.');
        }
        setIsLoading(false);
        return;
      }

      // If referral code was used and signup was successful, increment referrer's count
      if (referrerData && data && data.length > 0) {
        const { error: updateError } = await supabase
          .from('waitlist_entries')
          .update({ 
            referrals_made_count: referrerData.referrals_made_count + 1 
          })
          .eq('id', referrerData.id);

        if (updateError) {
          console.error('Error updating referrer count:', updateError);
          // Don't fail the signup if referrer count update fails
        }
      }

      if (data && data.length > 0) {
        setIsSuccess(true);
        setEmail('');
        setReferralCode('');
        console.log('Successfully added to waitlist:', data[0]);
      }
    } catch (err) {
      setError('Failed to join waitlist. Please try again.');
      console.error('Error submitting email:', err);
    } finally {
      setIsLoading(false);
      // Reset success status after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }
  };

  const value = {
    email,
    setEmail,
    referralCode,
    setReferralCode,
    isLoading,
    isSuccess,
    error,
    submitEmail,
  };

  return <EmailContext.Provider value={value}>{children}</EmailContext.Provider>;
};

export const useEmail = (): EmailContextType => {
  const context = useContext(EmailContext);
  if (!context) {
    throw new Error('useEmail must be used within an EmailProvider');
  }
  return context;
};