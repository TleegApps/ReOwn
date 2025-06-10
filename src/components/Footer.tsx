import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Twitter, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-6 md:mb-0 cursor-pointer" onClick={() => navigate('/')}>
            <img 
              src="/Reown.svg" 
              alt="ReOwn Logo" 
              className="h-8 w-auto"
            />
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Send className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-6 mb-4 md:mb-0">
            <button 
              onClick={() => navigate('/privacy-policy')}
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => navigate('/terms-conditions')}
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Terms & Conditions
            </button>
          </div>
          
          <div className="text-gray-500 text-sm">
            © 2025 ReOwn. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;