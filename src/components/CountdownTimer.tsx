import React, { useEffect, useState } from 'react';
import { Clock, Zap, Trophy, Gift } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const calculateTimeLeft = (): TimeLeft => {
    // Set launch date to 42 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 42);
    launchDate.setHours(launchDate.getHours() + 3);
    launchDate.setMinutes(launchDate.getMinutes() + 45);
    
    const difference = +launchDate - +new Date();
    
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'purple', icon: Trophy },
    { label: 'Hours', value: timeLeft.hours, color: 'blue', icon: Clock },
    { label: 'Minutes', value: timeLeft.minutes, color: 'purple', icon: Zap },
    { label: 'Seconds', value: timeLeft.seconds, color: 'blue', icon: Gift }
  ];

  return (
    <section id="countdown" className="py-16 md:py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced header */}
          <div className={`mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm mb-4">
              <Clock className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300 font-medium">Limited Time</span>
            </div>
            
            <h2 className="flex items-center justify-center text-2xl md:text-3xl font-bold gap-3">
              <Zap className="text-3xl text-yellow-400" />
              <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
                RWN Token Launches In:
              </span>
              <Gift className="text-3xl text-green-400" />
            </h2>
          </div>
          
          {/* Enhanced countdown grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {timeUnits.map((unit, index) => {
              const IconComponent = unit.icon;
              return (
                <div 
                  key={unit.label} 
                  className={`relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 md:p-6 group cursor-pointer transition-all duration-700 hover:scale-105 hover:bg-gray-800/70 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="flex justify-center mb-2">
                      <IconComponent className={`w-6 h-6 text-${unit.color}-400`} />
                    </div>
                    
                    {/* Enhanced time value */}
                    <div className="text-3xl md:text-5xl font-bold transition-all duration-500">
                      <span className={`bg-gradient-to-r from-${unit.color}-400 to-blue-400 text-transparent bg-clip-text`}>
                        {unit.value.toString().padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Enhanced label */}
                    <div className="text-sm mt-2">
                      <span className="text-gray-400 font-medium">
                        {unit.label}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Enhanced urgency message */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-gray-300 mb-4 text-lg">
              Don't miss out on the revolutionary loyalty token launch!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full border border-red-500/30 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-red-400" />
                <span className="text-sm text-red-300 font-medium">Early bird bonuses end at launch</span>
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 backdrop-blur-sm">
                <Trophy className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-300 font-medium">Exclusive rewards await</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;