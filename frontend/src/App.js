import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Toaster } from './components/ui/sonner';
import Home from './pages/Home';
import Servizi from './pages/Servizi';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servizi" element={<Servizi />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;