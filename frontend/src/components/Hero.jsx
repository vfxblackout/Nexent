import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=1920&q=80" 
          alt="Nexent Bank Professional Banking" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/95 via-emerald-800/90 to-emerald-700/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold">Nexent Bank - Italia</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-emerald-50 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-white hover:bg-emerald-50 text-emerald-700 px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-lg">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-medium">Digital Banking</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-lg">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-medium">Secure & Safe</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-lg">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-medium">European Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;