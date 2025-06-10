import React from 'react';

const TokenAnimation: React.FC = () => {
  return (
    <div className="relative w-96 h-96 md:w-[30rem] md:h-[30rem]">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-xl animate-pulse"></div>
      
      {/* Token container */}
      <div className="absolute inset-4 flex items-center justify-center">
        {/* Actual token image */}
        <img 
          src="/1000000143-removebg-preview.png" 
          alt="ReOwn Token" 
          className="w-full h-full object-contain animate-pulse"
        />
      </div>
    </div>
  );
};

export default TokenAnimation;