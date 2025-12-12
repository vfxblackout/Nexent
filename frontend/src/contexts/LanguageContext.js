import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      why: 'Perché Sceglierci',
      contact: 'Contatti'
    },
    hero: {
      title: 'Benvenuti a Nexent Bank Italia',
      subtitle: 'Il tuo partner finanziario di fiducia per un futuro più sicuro',
      cta: 'Scopri di più',
      ctaSecondary: 'Contattaci'
    },
    about: {
      title: 'Chi Siamo',
      subtitle: 'Un partner bancario su cui puoi contare',
      description: 'Siamo una banca boutique con sede centrale ad Amsterdam e filiali e clienti internazionali in tutto il mondo. Le nostre sedi principali si trovano nei Paesi Bassi, in Svizzera e in Romania. Abbiamo inoltre filiali in Germania, Malta e Ucraina.',
      italyNote: 'In Italia la Banca opera in libera prestazione di servizi, autorizzazione Banca d\'Italia n.21030.',
      services: 'I nostri servizi',
      servicesSubtitle: 'Soluzioni bancarie su misura per le tue esigenze',
      servicesNote: 'Per informazioni dettagliate sui nostri servizi, contattaci.'
    },
    why: {
      title: 'Perché Scegliere Nexent Bank',
      subtitle: 'Vantaggi che fanno la differenza',
      features: [
        {
          title: 'Banking Digitale Avanzato',
          description: 'Piattaforma online intuitiva e app mobile per gestire le tue finanze ovunque tu sia, 24/7.'
        },
        {
          title: 'Esperienza Internazionale',
          description: 'Facciamo parte di un network europeo che offre servizi bancari cross-border senza complicazioni.'
        },
        {
          title: 'Consulenza Personalizzata',
          description: 'Team di esperti dedicati che comprendono le esigenze specifiche del mercato italiano.'
        },
        {
          title: 'Sicurezza Garantita',
          description: 'Sistemi di sicurezza all\'avanguardia per proteggere i tuoi dati e le tue transazioni.'
        },
        {
          title: 'Tariffe Competitive',
          description: 'Condizioni trasparenti e competitive per tutti i nostri servizi bancari.'
        },
        {
          title: 'Supporto Locale',
          description: 'Assistenza in italiano disponibile attraverso i nostri canali di contatto dedicati.'
        }
      ]
    },
    contact: {
      title: 'Contattaci',
      subtitle: 'Siamo qui per aiutarti',
      form: {
        name: 'Nome Completo',
        email: 'Email',
        phone: 'Telefono',
        message: 'Messaggio',
        submit: 'Invia Messaggio',
        success: 'Messaggio inviato con successo!',
        error: 'Si è verificato un errore. Riprova.'
      },
      info: {
        phone: 'Telefono',
        email: 'Email',
        hours: 'Orari',
        hoursText: 'Lun - Ven: 9:00 - 18:00'
      }
    },
    footer: {
      tagline: 'Il tuo partner finanziario di fiducia',
      rights: 'Tutti i diritti riservati.',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Termini e Condizioni',
        cookies: 'Cookie Policy'
      }
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      why: 'Why Choose Us',
      contact: 'Contact'
    },
    hero: {
      title: 'Welcome to Nexent Bank Italy',
      subtitle: 'Your trusted financial partner for a more secure future',
      cta: 'Learn More',
      ctaSecondary: 'Contact Us'
    },
    about: {
      title: 'About Us',
      subtitle: 'A banking partner you can rely on',
      description: 'Nexent Bank Italy is the Italian branch of Nexent Bank, a dynamic and innovative financial institution offering personalized banking solutions. With a strong European presence, we combine international expertise with local knowledge to provide excellent financial services to our Italian customers.',
      mission: 'Our Mission',
      missionText: 'To provide digital, accessible, and personalized banking services that help our clients achieve their financial goals with confidence and security.',
      values: 'Our Values',
      valuesList: [
        { title: 'Transparency', text: 'Clear and honest communication in every interaction' },
        { title: 'Innovation', text: 'Cutting-edge digital solutions for modern banking' },
        { title: 'Reliability', text: 'A solid partner for your financial needs' }
      ]
    },
    why: {
      title: 'Why Choose Nexent Bank',
      subtitle: 'Benefits that make the difference',
      features: [
        {
          title: 'Advanced Digital Banking',
          description: 'Intuitive online platform and mobile app to manage your finances anywhere, anytime, 24/7.'
        },
        {
          title: 'International Experience',
          description: 'We are part of a European network offering seamless cross-border banking services.'
        },
        {
          title: 'Personalized Advisory',
          description: 'Dedicated team of experts who understand the specific needs of the Italian market.'
        },
        {
          title: 'Guaranteed Security',
          description: 'State-of-the-art security systems to protect your data and transactions.'
        },
        {
          title: 'Competitive Rates',
          description: 'Transparent and competitive conditions for all our banking services.'
        },
        {
          title: 'Local Support',
          description: 'Italian-speaking assistance available through our dedicated contact channels.'
        }
      ]
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully!',
        error: 'An error occurred. Please try again.'
      },
      info: {
        phone: 'Phone',
        email: 'Email',
        hours: 'Hours',
        hoursText: 'Mon - Fri: 9:00 AM - 6:00 PM'
      }
    },
    footer: {
      tagline: 'Your trusted financial partner',
      rights: 'All rights reserved.',
      links: {
        privacy: 'Privacy Policy',
        terms: 'Terms & Conditions',
        cookies: 'Cookie Policy'
      }
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('it');

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'it' ? 'en' : 'it');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};