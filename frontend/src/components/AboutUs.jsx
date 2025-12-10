import React from 'react';
import { Card } from './ui/card';
import { CheckCircle2, Target, Heart, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  const valueIcons = {
    0: CheckCircle2,
    1: Lightbulb,
    2: Heart
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>

        {/* Main Description */}
        <div className="mb-20">
          <Card className="p-8 md:p-12 bg-gradient-to-br from-emerald-50 to-white border-emerald-100 shadow-lg">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {t.about.description}
            </p>
          </Card>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                {t.about.mission}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t.about.values}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {t.about.valuesList.map((value, index) => {
              const IconComponent = valueIcons[index];
              return (
                <Card
                  key={index}
                  className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-emerald-100 group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                    <IconComponent className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;