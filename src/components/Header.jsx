import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4 lg:px-12 bg-white border-b border-gray-100 shadow-sm text-gray-800">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
          <img 
            src="https://fragileremovals.co.nz/wp-content/uploads/2024/03/logo.webp" 
            alt="Fragile Removals Logo" 
            className="h-10 md:h-12 w-auto object-contain"
          />
        </div>

        <nav className="hidden xl:flex items-center gap-8">
          <div className="hover:text-primary transition-colors cursor-pointer border-b-2 border-primary text-sm font-medium">Home</div>
          <div className="hover:text-primary transition-colors cursor-pointer text-sm font-medium">Services</div>
          <div className="hover:text-primary transition-colors cursor-pointer text-sm font-medium">FAQs</div>
          <div className="hover:text-primary transition-colors cursor-pointer text-sm font-medium">About Us</div>
          <div className="hover:text-primary transition-colors cursor-pointer text-sm font-medium">Hamilton</div>
          <div className="hover:text-primary transition-colors cursor-pointer text-sm font-medium">Contact Us</div>
        </nav>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 md:px-5 py-2 md:py-2.5 rounded-md font-bold transition-all shadow-[0_4px_10px_rgba(211,47,47,0.3)] active:translate-y-0.5 text-sm md:text-base">
            <Phone className="w-4 h-4" />
            <span className="hidden md:block">027 452 2255</span>
          </button>
          <button 
            className="xl:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg flex flex-col items-center py-6 gap-4 font-bold text-gray-800 animate-in slide-in-from-top-2 duration-200">
          <div className="hover:text-primary transition-colors cursor-pointer w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>Home</div>
          <div className="hover:text-primary transition-colors cursor-pointer w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>Services</div>
          <div className="hover:text-primary transition-colors cursor-pointer w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>FAQs</div>
          <div className="hover:text-primary transition-colors cursor-pointer w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>About Us</div>
          <div className="hover:text-primary transition-colors cursor-pointer w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>Hamilton</div>
          <div className="hover:text-primary transition-colors cursor-pointer w-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>Contact Us</div>
        </div>
      )}
    </header>
  );
};

export default Header;
