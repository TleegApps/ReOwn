import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: 'smooth',
        });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const handleFAQClick = () => {
    navigate('/faq');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
          <img 
            src="/Reown.svg" 
            alt="ReOwn Logo" 
            className="h-8 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-gray-300 hover:text-white transition"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="text-gray-300 hover:text-white transition"
          >
            How It Works
          </button>
          <button 
            onClick={() => scrollToSection('loyalty-tiers')} 
            className="text-gray-300 hover:text-white transition"
          >
            Loyalty Tiers
          </button>
          <button 
            onClick={handleFAQClick} 
            className="text-gray-300 hover:text-white transition"
          >
            FAQ
          </button>
        </nav>
        
        <button 
          onClick={() => scrollToSection('hero')}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/20 transition duration-300 text-sm md:text-base font-medium"
        >
          Join Waitlist
        </button>
      </div>
    </header>
  );
};

export default Header;