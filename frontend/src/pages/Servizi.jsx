import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Servizi = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.services.backToHome}
          </Button>

          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
              <FileText className="w-4 h-4" />
              <span className="text-sm font-semibold">Nexent Bank Italia</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.services.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          {/* Services Table */}
          <Card className="p-8 md:p-12 bg-white border-emerald-100 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-emerald-600">
                    <th className="text-left py-3 px-3 text-emerald-700 font-semibold">
                      {t.services.tableHeaders.service}
                    </th>
                    <th className="text-left py-3 px-3 text-emerald-700 font-semibold">
                      {t.services.tableHeaders.modality}
                    </th>
                    <th className="text-left py-3 px-3 text-emerald-700 font-semibold">
                      {t.services.tableHeaders.state}
                    </th>
                    <th className="text-left py-3 px-3 text-emerald-700 font-semibold">
                      {t.services.tableHeaders.authDate}
                    </th>
                    <th className="text-left py-3 px-3 text-emerald-700 font-semibold">
                      {t.services.tableHeaders.revokeDate}
                    </th>
                    <th className="text-left py-3 px-3 text-emerald-700 font-semibold">
                      {t.services.tableHeaders.startDate}
                    </th>
                    <th className="text-left py-3 px-3 text-emerald-700 font-semibold">
                      {t.services.tableHeaders.endDate}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Esecuzione di ordini per conto dei clienti</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">2025-11-20</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">2025-11-20</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Ricezione e trasmissione di ordini</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">2025-11-20</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">2025-11-20</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Cassette sicurezza e ammin. strum. fin. c/clienti</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">2025-11-20</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">2025-11-20</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Negoziazione per conto proprio</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">2025-11-20</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">2025-11-20</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Operazioni in cambi</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">2025-08-01</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">2025-08-01</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Ope. in strumenti finanziari a termine e opzioni</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">2025-08-01</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">2025-08-01</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Operazioni in valori mobiliari</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">2025-08-01</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">2025-08-01</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Ope. in contratti su tassi di cambio e d'interesse</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">2025-08-01</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">2025-08-01</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Rilascio garanzie e impegni di firma</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">1994-04-21</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">1994-04-21</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Raccolta di depositi o altri fondi rimborsabili</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">1994-04-21</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">1994-04-21</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Operazioni di prestito</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">1994-04-21</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">1994-04-21</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors duration-200">
                    <td className="py-3 px-3 font-medium text-gray-900">Operazioni in strumenti di mercato monetario</td>
                    <td className="py-3 px-3 text-gray-600">Libera prestazione</td>
                    <td className="py-3 px-3 text-gray-600">Italia</td>
                    <td className="py-3 px-3 text-gray-600">1994-04-21</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                    <td className="py-3 px-3 text-gray-600">1994-04-21</td>
                    <td className="py-3 px-3 text-gray-600">9999-12-31</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 italic mt-6 text-center">
              {t.services.note}
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servizi;