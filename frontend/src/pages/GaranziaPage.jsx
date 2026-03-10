import React, { useState, useEffect } from 'react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useParams, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, ArrowLeft } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const GaranziaPage = () => {
  const { t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  const [garanzia, setGaranzia] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadGaranzia();
  }, [id]);

  const loadGaranzia = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/garanzia/${id}`);
      setGaranzia(response.data);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Caricamento...</p>
        </div>
      </div>
    );
  }

  if (error || !garanzia) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center px-4">
        <Card className="max-w-md p-8 text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.garanzia.notFound}</h1>
          <Button onClick={() => navigate('/')} className="bg-emerald-600 hover:bg-emerald-700 text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.garanzia.backToHome}
          </Button>
        </Card>
      </div>
    );
  }

  const isApprovato = garanzia.stato === 'approvato';

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white flex items-center justify-center px-4 py-12">
      <Card className="max-w-3xl w-full p-8 md:p-12 shadow-2xl">
        <div className="text-center mb-8">
          <img 
            src="/nexent-logo.svg" 
            alt="Nexent Bank Logo" 
            className="h-12 mx-auto mb-6"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t.garanzia.title}
          </h1>
        </div>

        <div className="flex justify-center mb-8">
          {isApprovato ? (
            <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-600" />
            </div>
          ) : (
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
              <XCircle className="w-16 h-16 text-red-600" />
            </div>
          )}
        </div>

        <div className={`bg-gray-50 border-l-4 ${isApprovato ? 'border-emerald-600' : 'border-red-600'} p-6 md:p-8 mb-8`}>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-center">
            La garanzia di assicurazione di <strong>{garanzia.nome_completo}</strong> con data{' '}
            <strong>{garanzia.data}</strong> è stato{' '}
            <strong className={isApprovato ? 'text-emerald-600' : 'text-red-600'}>
              {garanzia.stato}
            </strong>.
          </p>
        </div>

        <div className="text-center border-t pt-6">
          <p className="text-gray-700 mb-2">{t.garanzia.saluti}</p>
          <p className="text-xl font-bold text-emerald-600">{t.garanzia.bank}</p>
        </div>

        <div className="mt-8 text-center">
          <Button 
            onClick={() => navigate('/')} 
            variant="outline"
            className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.garanzia.backToHome}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default GaranziaPage;
