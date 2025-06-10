import React, { useState, useEffect } from 'react';
import { Share2, Copy, Check, Users, Gift } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ReferralRewards: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [userReferralCode, setUserReferralCode] = useState('');
  const [referralCount, setReferralCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // For demo purposes, we'll use a sample referral code
  // In a real app, this would come from the user's session/profile
  const sampleReferralCode = 'RWNEARLY500';

  useEffect(() => {
    // Simulate fetching user's referral data
    const fetchReferralData = async () => {
      try {
        // In a real implementation, you'd get the current user's referral code
        // For demo, we'll use the sample code and check if it exists in the database
        const { data, error } = await supabase
          .from('waitlist_entries')
          .select('user_referral_code, referrals_made_count')
          .eq('user_referral_code', sampleReferralCode)
          .maybeSingle();

        if (data) {
          setUserReferralCode(data.user_referral_code);
          setReferralCount(data.referrals_made_count);
        } else {
          // If the sample code doesn't exist, use it as a demo code
          setUserReferralCode(sampleReferralCode);
          setReferralCount(0);
        }
      } catch (err) {
        console.error('Error fetching referral data:', err);
        setUserReferralCode(sampleReferralCode);
        setReferralCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReferralData();
  }, []);
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(userReferralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = `${window.location.origin}?ref=${userReferralCode}`;

  const shareOnSocial = (platform: string) => {
    const message = `Join me on the ReOwn Token waitlist and get exclusive early access! Use my referral code: ${userReferralCode}`;
    
    let url = '';
    switch (platform) {
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(message)}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <Share2 className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Invite friends. Earn extra tokens.
            </h2>
            
            <p className="text-lg text-gray-300 mb-2">
              Get 500 RWN per referral who joins the waitlist
            </p>
            
            {/* Referral stats */}
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700">
                <Users className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">
                  {isLoading ? 'Loading...' : `${referralCount} referrals made`}
                </span>
              </div>
              
              <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                <Gift className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300 font-medium">
                  {referralCount * 500} RWN earned
                </span>
              </div>
            </div>
          </div>

          {/* Referral code section */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-purple-300 mb-4 text-center">
              Your Referral Code
            </h3>
            
            <div className="bg-gray-900/50 border border-gray-600 rounded-lg p-4 mb-6 flex items-center justify-between">
              <div className="font-mono text-xl text-yellow-400 font-bold">
                {isLoading ? 'Loading...' : userReferralCode}
              </div>
              <button 
                onClick={copyToClipboard}
                disabled={isLoading}
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-md transition-colors disabled:opacity-50"
              >
                {copied ? <Check className="h-5 w-5 text-green-400" /> : <Copy className="h-5 w-5 text-gray-300" />}
              </button>
            </div>

            {/* Share buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button 
                onClick={() => shareOnSocial('facebook')}
                className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-colors text-white font-medium"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Share on Facebook
              </button>
              
              <button 
                onClick={() => shareOnSocial('twitter')}
                className="flex items-center justify-center gap-3 bg-sky-500 hover:bg-sky-600 px-6 py-3 rounded-full transition-colors text-white font-medium"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Tweet
              </button>
              
              <button 
                onClick={() => shareOnSocial('linkedin')}
                className="flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-full transition-colors text-white font-medium"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </button>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-6 border border-purple-500/30">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              How Referrals Work
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-medium text-white mb-2">Share Your Code</h4>
                <p className="text-gray-300 text-sm">
                  Share your unique referral code with friends and family
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-medium text-white mb-2">They Join</h4>
                <p className="text-gray-300 text-sm">
                  When they sign up using your code, they get bonus tokens too
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-medium text-white mb-2">You Both Win</h4>
                <p className="text-gray-300 text-sm">
                  You both receive 500 RWN tokens when the platform launches
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralRewards;