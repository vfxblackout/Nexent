import React, { useState, useEffect } from 'react';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { Download, ExternalLink, LogOut, Plus } from 'lucide-react';
import axios from 'axios';
import { useToast } from '../hooks/use-toast';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AdminDashboard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [garanzie, setGaranzie] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    numero_garanzia: '',
    nome_completo: '',
    contraente: '',
    beneficiario: '',
    importo_garantito: '',
    data_inizio: '',
    data_cessazione: '',
    stato: 'approvato'
  });
  const [lastCreatedId, setLastCreatedId] = useState(null);

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('admin_logged_in');
    if (!isLoggedIn) {
      navigate('/admin');
    } else {
      loadGaranzie();
    }
  }, [navigate]);

  const loadGaranzie = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/garanzie`);
      setGaranzie(response.data);
    } catch (error) {
      console.error('Error loading garanzie:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/garanzie`, formData);
      toast({
        title: t.admin.garanzie.form.success,
      });
      setLastCreatedId(response.data.id);
      setFormData({ 
        numero_garanzia: '',
        nome_completo: '',
        contraente: '',
        beneficiario: '',
        importo_garantito: '',
        data_inizio: '',
        data_cessazione: '',
        stato: 'approvato'
      });
      setShowForm(false);
      loadGaranzie();
    } catch (error) {
      toast({
        title: 'Errore',
        description: 'Impossibile creare la garanzia',
        variant: 'destructive'
      });
    }
  };

  const handleDownloadQR = (garanziaId) => {
    const qrUrl = `${BACKEND_URL}/api/garanzia/${garanziaId}/qr`;
    window.open(qrUrl, '_blank');
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_logged_in');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.admin.garanzie.title}</h1>
              <p className="text-gray-600">Gestisci le garanzie assicurative</p>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="mb-8">
            <Button
              onClick={() => setShowForm(!showForm)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Plus className="w-4 h-4 mr-2" />
              {t.admin.garanzie.createNew}
            </Button>
          </div>

          {showForm && (
            <Card className="p-8 mb-8 border-emerald-100 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.admin.garanzie.createNew}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.admin.garanzie.form.numeroGaranzia}
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.numero_garanzia}
                      onChange={(e) => setFormData({ ...formData, numero_garanzia: e.target.value })}
                      placeholder="GAR-2025-001"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.admin.garanzie.form.nomeCompleto}
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.nome_completo}
                      onChange={(e) => setFormData({ ...formData, nome_completo: e.target.value })}
                      placeholder="Mario Rossi"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.admin.garanzie.form.contraente}
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.contraente}
                      onChange={(e) => setFormData({ ...formData, contraente: e.target.value })}
                      placeholder="Azienda SRL"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.admin.garanzie.form.beneficiario}
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.beneficiario}
                      onChange={(e) => setFormData({ ...formData, beneficiario: e.target.value })}
                      placeholder="Ente Pubblico"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.admin.garanzie.form.importoGarantito}
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.importo_garantito}
                      onChange={(e) => setFormData({ ...formData, importo_garantito: e.target.value })}
                      placeholder="€ 50.000,00"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.admin.garanzie.form.dataInizio}
                    </label>
                    <Input
                      type="date"
                      required
                      value={formData.data_inizio}
                      onChange={(e) => setFormData({ ...formData, data_inizio: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t.admin.garanzie.form.dataCessazione}
                    </label>
                    <Input
                      type="date"
                      required
                      value={formData.data_cessazione}
                      onChange={(e) => setFormData({ ...formData, data_cessazione: e.target.value })}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    {t.admin.garanzie.form.stato}
                  </label>
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => setFormData({ ...formData, stato: 'approvato' })}
                      className={`flex-1 ${formData.stato === 'approvato' ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {t.admin.garanzie.form.approvato}
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setFormData({ ...formData, stato: 'denegato' })}
                      className={`flex-1 ${formData.stato === 'denegato' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {t.admin.garanzie.form.denegato}
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                    {t.admin.garanzie.form.submit}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    Annulla
                  </Button>
                </div>
              </form>

              {lastCreatedId && (
                <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                  <p className="text-emerald-800 font-semibold mb-3">Garanzia creata con successo!</p>
                  <Button
                    onClick={() => handleDownloadQR(lastCreatedId)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {t.admin.garanzie.form.downloadQR}
                  </Button>
                </div>
              )}
            </Card>
          )}

          <Card className="p-8 border-emerald-100 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.admin.garanzie.list.title}</h2>
            
            {garanzie.length === 0 ? (
              <p className="text-gray-500 text-center py-8">{t.admin.garanzie.list.empty}</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-emerald-600">
                      <th className="text-left py-3 px-4 text-emerald-700 font-semibold">N. Garanzia</th>
                      <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Nome Completo</th>
                      <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Contraente</th>
                      <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Importo</th>
                      <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Stato</th>
                      <th className="text-left py-3 px-4 text-emerald-700 font-semibold">Azioni</th>
                    </tr>
                  </thead>
                  <tbody>
                    {garanzie.map((garanzia) => (
                      <tr key={garanzia.id} className="border-b border-gray-200 hover:bg-emerald-50 transition-colors">
                        <td className="py-3 px-4 font-medium text-gray-900">{garanzia.numero_garanzia}</td>
                        <td className="py-3 px-4 text-gray-700">{garanzia.nome_completo}</td>
                        <td className="py-3 px-4 text-gray-600">{garanzia.contraente}</td>
                        <td className="py-3 px-4 text-gray-600">{garanzia.importo_garantito}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            garanzia.stato === 'approvato' 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {garanzia.stato}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              onClick={() => handleDownloadQR(garanzia.id)}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white"
                            >
                              <Download className="w-4 h-4 mr-1" />
                              QR
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => window.open(`/garanzia/${garanzia.id}`, '_blank')}
                              className="border-emerald-600 text-emerald-600"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Vedi
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
