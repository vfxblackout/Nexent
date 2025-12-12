import React from 'react';
import { Card } from './ui/card';
import { Building2, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

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

        {/* Main Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Text Content */}
          <div>
            <Card className="p-8 md:p-10 bg-gradient-to-br from-emerald-50 to-white border-emerald-100 shadow-lg">
              <div className="flex items-start space-x-3 mb-4">
                <Building2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t.about.description}
                  </p>
                  <div className="bg-emerald-100 border-l-4 border-emerald-600 p-4 rounded">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700 leading-relaxed italic">
                        {t.about.italyNote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1523270918669-1fd17ac1742d?w=800&q=80" 
              alt="Nexent Bank Building" 
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {t.about.services}
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.about.servicesSubtitle}
            </p>
          </div>
          
          <Card className="p-8 md:p-12 bg-white border-emerald-100 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-emerald-600">
                    <th className="text-left py-4 px-4 text-emerald-700 font-semibold text-lg">
                      Servizio
                    </th>
                    <th className="text-left py-4 px-4 text-emerald-700 font-semibold text-lg">
                      Modalità
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Esecuzione di ordini per conto dei clienti</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Ricezione e trasmissione di ordini</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Cassette sicurezza e ammin. strum. fin. c/clienti</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Negoziazione per conto proprio</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Operazioni in cambi</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Ope. in strumenti finanziari a termine e opzioni</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Operazioni in valori mobiliari</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Ope. in contratti su tassi di cambio e d'interesse</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Rilascio garanzie e impegni di firma</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Raccolta di depositi o altri fondi rimborsabili</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Operazioni di prestito</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-4 font-medium text-gray-900">Operazioni in strumenti di mercato monetario</td>
                    <td className="py-3 px-4 text-gray-600">Libera prestazione di servizi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center">
              {t.about.servicesNote}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;