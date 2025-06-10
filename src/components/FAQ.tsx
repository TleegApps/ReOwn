import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FAQ: React.FC = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is the ReOwn Token ($RWN)?",
      answer: "$RWN is a blockchain-based utility token used within the ReOwn e-commerce platform. It acts like a loyalty rewards currency, allowing users to earn tokens with every purchase and redeem them for discounts."
    },
    {
      question: "How do I earn $RWN tokens?",
      answer: "You earn $RWN every time you make a purchase on the ReOwn site—regardless of whether you pay with a credit card, debit card, bank account, or PayPal. The more you shop, the more you earn."
    },
    {
      question: "What can I do with $RWN tokens?",
      answer: "• Redeem them at checkout for 10% off.\n• Accumulate them to unlock loyalty tiers for bigger rewards.\n• Purchase token packages to save more and gain bonus tokens."
    },
    {
      question: "Can I buy $RWN tokens directly?",
      answer: "Yes. You'll be able to buy packaged deals of $RWN tokens on the ReOwn site, each including bonus tokens that increase with package size."
    },
    {
      question: "Is $RWN a cryptocurrency like Bitcoin?",
      answer: "Not quite. $RWN is a closed-loop utility token, not meant for public trading or investment. It's backed by Polygon blockchain tech but strictly used inside the ReOwn ecosystem."
    },
    {
      question: "Why is there a waitlist?",
      answer: "The waitlist ensures that our early adopters and most loyal users get first access to the $RWN ecosystem. It also helps us launch responsibly, with a focus on utility and sustainability."
    },
    {
      question: "What makes $RWN deflationary?",
      answer: "• 1% of tokens are burned during every purchase transaction.\n• Unclaimed loyalty rewards expire and are burned after 90 days, reducing overall supply and increasing scarcity."
    },
    {
      question: "Is my data and wallet secure?",
      answer: "Absolutely. We use encrypted, secure payment gateways and wallet integrations. Your linked payment methods (like PayPal, debit, or bank) are protected by industry-standard protocols."
    },
    {
      question: "How is this different from other reward programs?",
      answer: "Traditional rewards are centralized, opaque, and expire without notice. $RWN tokens are transparent, trackable, ownable, and can be used anytime—on-chain and in your control."
    },
    {
      question: "When will the ReOwn Token officially launch?",
      answer: "The full launch will follow the close of the waitlist. Early registrants will gain first access to purchase, earn, and use $RWN ahead of the public rollout."
    }
  ];

  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
          Back to Home
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              ReOwn Token – 
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
              Frequently Asked Questions
            </span>
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-300 mb-4">
                {index + 1}. {faq.question}
              </h3>
              <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                {faq.answer}
              </div>
              {index < faqs.length - 1 && (
                <div className="mt-6 border-b border-gray-700/50"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              Ready to Get Started?
            </h3>
            <p className="text-gray-300 mb-6">
              Join the waitlist now to secure your early access to ReOwn Tokens and exclusive bonuses.
            </p>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 font-medium hover:scale-105"
            >
              Join Waitlist Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;