import React, { useState, useRef, useEffect } from 'react';
import { CreditCard, ShoppingBag, Gift, CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  isVisible: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index, isVisible }) => {
  return (
    <div 
      className={`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 transition-all duration-700 group cursor-pointer overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500"></div>
      
      <div className="relative z-10">
        {/* Icon container */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-700 to-blue-700 flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110">
          <div className="transition-all duration-300 group-hover:scale-110">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Step number indicator */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm font-bold">
        {index + 1}
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: "Earn RWN as cashback",
      description: "Get rewarded with RWN tokens on every purchase from our partner merchants. The more you shop, the more you earn."
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-white" />,
      title: "Use RWN for discounts",
      description: "Redeem your RWN tokens for exclusive discounts, special offers, and unique products across our network."
    },
    {
      icon: <Gift className="h-8 w-8 text-white" />,
      title: "Buy token packages",
      description: "Purchase RWN token packages to instantly unlock higher loyalty tiers and receive bigger bonuses."
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-16 md:py-24 bg-gray-900/50 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-4">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span className="text-sm text-purple-300 font-medium">Simple & Rewarding</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            How $RWN Works
          </h2>
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Experience the future of loyalty rewards with our revolutionary three-step process
          </p>
        </div>
        
        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;