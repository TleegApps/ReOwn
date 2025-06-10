import React, { useState } from 'react';
import { useEmail } from '../context/EmailContext';
import { ArrowRight, Gift as Gift2 } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const { email, setEmail, referralCode, setReferralCode, isLoading, isSuccess, error, submitEmail } = useEmail();
  const [showReferralInput, setShowReferralInput] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEmail(email, referralCode || undefined);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Don't miss out. Join the ReOwn Revolution.
          </h2>
          
          <p className="text-lg text-gray-300 mb-8">
            Secure your spot now and be among the first to experience the future of loyalty rewards.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-3">
              {/* Email input */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                  disabled={isLoading || isSuccess}
                />
              </div>

              {/* Referral code toggle */}
              {!showReferralInput ? (
                <button
                  type="button"
                  onClick={() => setShowReferralInput(true)}
                  className="text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300 flex items-center gap-1 mx-auto"
                >
                  <Gift2 className="w-4 h-4" />
                  Have a referral code?
                </button>
              ) : (
                <div className="relative">
                  <input
                    type="text"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                    placeholder="Enter referral code (optional)"
                    className="w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 text-white placeholder-gray-400"
                    disabled={isLoading || isSuccess}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShowReferralInput(false);
                      setReferralCode('');
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 text-sm"
                  >
                    ✕
                  </button>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading || isSuccess}
                className={`w-full px-6 py-3 rounded-full font-medium transition duration-300 flex items-center justify-center gap-2 ${
                  isLoading 
                    ? 'bg-gray-700 cursor-not-allowed'
                    : isSuccess
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/20'
                }`}
              >
                {isLoading ? 'Processing...' : isSuccess ? '🎉 You\'re on the list!' : (
                  <>
                    Join Early Access List
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
            
            {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
            
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 text-sm">
                You'll be notified first when token sales open.
              </p>
              
              {referralCode && (
                <div className="flex items-center justify-center gap-1 text-green-400 text-sm">
                  <Gift2 size={16} />
                  <span>+500 RWN bonus for using referral code!</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;