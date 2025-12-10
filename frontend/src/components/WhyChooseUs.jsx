import React from 'react';
import { Card } from './ui/card';
import { Smartphone, Globe2, Users, Shield, TrendingDown, Headphones } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const featureIcons = {
    0: Smartphone,
    1: Globe2,
    2: Users,
    3: Shield,
    4: TrendingDown,
    5: Headphones
  };

  return (
    <section id="why" className="py-20 md:py-32 bg-gradient-to-b from-white via-emerald-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.why.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.why.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.why.features.map((feature, index) => {
            const IconComponent = featureIcons[index];
            return (
              <Card
                key={index}
                className="p-6 md:p-8 bg-white hover:shadow-2xl transition-all duration-300 hover:scale-105 border-emerald-100 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl flex items-center justify-center mb-5 group-hover:from-emerald-600 group-hover:to-emerald-500 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="inline-block p-8 md:p-10 bg-emerald-600 text-white border-0 shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              {t.why.title.includes('Perché') ? 'Pronto a iniziare?' : 'Ready to get started?'}
            </h3>
            <p className="text-lg text-emerald-50 mb-6">
              {t.why.title.includes('Perché') 
                ? 'Contattaci oggi per scoprire come possiamo aiutarti'
                : 'Contact us today to discover how we can help you'}
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t.nav.contact}
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;