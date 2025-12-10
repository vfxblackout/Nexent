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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-emerald-50/30 to-white pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-8 animate-in fade-in slide-in-from-bottom-3 duration-700">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-semibold">Nexent Bank - Italia</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            {t.hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
            <Button
              size="lg"
              onClick={() => scrollToSection('about')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-7 duration-700 delay-500">
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-md">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 font-medium">Digital Banking</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-md">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 font-medium">Secure & Safe</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-md">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <Globe className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-gray-700 font-medium">European Network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;