import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900">Nexent Bank</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              {t.nav.why}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-2 animate-in slide-in-from-top duration-200">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200 rounded-md"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200 rounded-md"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('why')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200 rounded-md"
            >
              {t.nav.why}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200 rounded-md"
            >
              {t.nav.contact}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;