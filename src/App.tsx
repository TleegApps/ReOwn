import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import LoyaltyTiers from './components/LoyaltyTiers';
import ReferralRewards from './components/ReferralRewards';
import CountdownTimer from './components/CountdownTimer';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import { EmailProvider } from './context/EmailContext';

function HomePage() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <LoyaltyTiers />
      <ReferralRewards />
      <CountdownTimer />
      <FinalCTA />
    </main>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <EmailProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white relative">
        {/* Background Image */}
        <div 
          className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url(/file_00000000179061fd96ed8117175ac16e.png)',
            backgroundAttachment: 'fixed',
            opacity: '0.15'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <Header scrolled={scrolled} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </EmailProvider>
  );
}

export default App;