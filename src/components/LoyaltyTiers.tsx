import React, { useState, useRef, useEffect } from 'react';
import { Shield, Trophy, Crown, Diamond, Award } from 'lucide-react';

interface TierProps {
  name: string;
  amount: string;
  icon: React.ReactNode;
  color: string;
  isActive?: boolean;
  index: number;
  isVisible: boolean;
}

const Tier: React.FC<TierProps> = ({ name, amount, icon, color, isActive = false, index, isVisible }) => {
  return (
    <div 
      className={`relative flex flex-col items-center transition-all duration-700 cursor-pointer group ${
        isActive ? 'scale-110 z-10' : 'scale-100 hover:scale-105'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Tier icon container */}
      <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
        isActive 
          ? `bg-${color}-500/20 ring-2 ring-${color}-500 shadow-lg shadow-${color}-500/20` 
          : `bg-${color}-500/10 ring-1 ring-${color}-500/50 group-hover:bg-${color}-500/15 group-hover:ring-2 group-hover:ring-${color}-500/70`
      }`}>
        <div className="transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      
      {/* Tier information */}
      <div className="text-center mt-3">
        <h3 className={`text-base md:text-lg font-medium transition-all duration-300 ${
          isActive ? `text-${color}-400` : `text-white group-hover:text-${color}-300`
        }`}>
          {name}
        </h3>
        <p className={`text-sm mt-1 transition-all duration-300 ${
          isActive ? `text-${color}-400` : `text-gray-400 group-hover:text-${color}-400`
        }`}>
          {amount}
        </p>
      </div>
      
      {/* Connection line to next tier */}
      {index < 4 && (
        <div className={`absolute top-8 md:top-10 left-full w-full h-px transition-all duration-500 ${
          isActive ? `bg-gradient-to-r from-${color}-500 to-gray-600` : 'bg-gradient-to-r from-gray-600 to-gray-700'
        } -z-10 hidden md:block`}></div>
      )}
      
      {/* Tier number badge */}
      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-${color}-600 to-${color}-700 flex items-center justify-center text-white text-xs font-bold`}>
        {index + 1}
      </div>
    </div>
  );
};

const LoyaltyTiers: React.FC = () => {
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

  const tiers = [
    {
      name: "Bronze",
      amount: "5,000 RWN",
      icon: <Shield className="h-8 w-8 text-amber-600" />,
      color: "amber"
    },
    {
      name: "Silver",
      amount: "7,500 RWN",
      icon: <Award className="h-8 w-8 text-gray-400" />,
      color: "gray"
    },
    {
      name: "Gold",
      amount: "10,000 RWN",
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      color: "yellow",
      isActive: true
    },
    {
      name: "Platinum",
      amount: "20,000 RWN",
      icon: <Crown className="h-8 w-8 text-blue-400" />,
      color: "blue"
    },
    {
      name: "Diamond",
      amount: "50,000 RWN",
      icon: <Diamond className="h-8 w-8 text-purple-400" />,
      color: "purple"
    }
  ];

  return (
    <section ref={sectionRef} id="loyalty-tiers" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-purple-500/20 rounded-full border border-yellow-500/30 backdrop-blur-sm mb-4">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300 font-medium">Exclusive Tiers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
            Loyalty Tiers Preview
          </h2>
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Unlock exclusive benefits and rewards as you progress through our tier system
          </p>
        </div>
        
        {/* Tiers display */}
        <div className="relative max-w-5xl mx-auto overflow-x-auto pb-8">
          <div className="flex justify-between min-w-max md:min-w-0 px-4 md:px-0 space-x-8 md:space-x-4 lg:space-x-8">
            {tiers.map((tier, index) => (
              <Tier
                key={tier.name}
                name={tier.name}
                amount={tier.amount}
                icon={tier.icon}
                color={tier.color}
                isActive={tier.isActive}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
        
        {/* Benefits callout */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-full text-white font-medium relative overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
            <span className="relative z-10">Higher tiers unlock bigger reward bonuses</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyTiers;