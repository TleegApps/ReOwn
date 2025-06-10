import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { WaitlistEntry } from '../lib/supabase';

export const useWaitlist = () => {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEntries = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('waitlist_entries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setEntries(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getEntryByReferralCode = async (referralCode: string) => {
    try {
      const { data, error } = await supabase
        .from('waitlist_entries')
        .select('*')
        .eq('user_referral_code', referralCode)
        .single();

      if (error) throw error;
      return data;
    } catch (err) {
      console.error('Error fetching entry by referral code:', err);
      return null;
    }
  };

  const getTotalReferrals = (referralCode: string) => {
    const entry = entries.find(e => e.user_referral_code === referralCode);
    return entry?.referrals_made_count || 0;
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return {
    entries,
    loading,
    error,
    fetchEntries,
    getEntryByReferralCode,
    getTotalReferrals,
  };
};