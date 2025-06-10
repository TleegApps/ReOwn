import React, { useState } from 'react';
import { useEmail } from '../context/EmailContext';
import { Sparkles, ArrowRight, Gift as Gift2 } from 'lucide-react';
import TokenAnimation from './ui/TokenAnimation';

const Hero: React.FC = () => {
  const { email, setEmail, referralCode, setReferralCode, isLoading, isSuccess, error, submitEmail } = useEmail();
  const [showReferralInput, setShowReferralInput] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEmail(email, referralCode || undefined);
  };

  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* Enhanced badge */}
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-purple-300 font-medium">Revolutionary Loyalty Token</span>
          </div>
          
          {/* Enhanced title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 text-transparent bg-clip-text">
              The Currency of
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
              Reward Is Coming
            </span>
          </h1>
          
          {/* Enhanced description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Get early access to ReOwn Tokens and unlock exclusive bonuses that will revolutionize how you earn rewards.
          </p>
          
          {/* Token animation - centered above form */}
          <div className="mb-8">
            <TokenAnimation />
          </div>
          
          {/* Enhanced form - centered */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full">
            <div className="space-y-3">
              {/* Email input */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
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
                    className="w-full px-4 py-3 rounded-full bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
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
                className={`w-full px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden ${
                  isLoading 
                    ? 'bg-gray-700 cursor-not-allowed'
                    : isSuccess
                    ? 'bg-green-600 hover:bg-green-700 hover:scale-105 shadow-lg shadow-green-500/25'
                    : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 active:scale-95'
                }`}
              >
                <div className="relative z-10 flex items-center gap-2">
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : isSuccess ? (
                    <>
                      <span className="animate-bounce">🎉</span>
                      You're on the list!
                    </>
                  ) : (
                    <>
                      Reserve My Spot
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </div>
              </button>
            </div>
            
            {error && (
              <p className="text-red-400 text-sm mt-2 text-center">{error}</p>
            )}
            
            {/* Enhanced bonus indicator */}
            <div className="flex flex-col items-center justify-center gap-2 mt-4 text-sm">
              <div className="flex items-center gap-1">
                <Sparkles size={16} className="text-yellow-400" />
                <span className="text-yellow-400">First 1,000 signups get</span>
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text font-bold text-lg">
                  +500 bonus RWN
                </span>
                <span className="text-yellow-400">at launch</span>
              </div>
              
              {referralCode && (
                <div className="flex items-center gap-1 text-green-400">
                  <Gift2 size={16} />
                  <span>+500 RWN bonus for using referral code!</span>
                </div>
              )}
            </div>
          </form>

          {/* Trust indicators */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Secure & Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>No Spam Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Early Access Only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;