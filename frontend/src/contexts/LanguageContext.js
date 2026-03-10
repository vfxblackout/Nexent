import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  it: {
    nav: {
      home: 'Home',
      about: 'Chi Siamo',
      services: 'Servizi',
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
        address: 'Indirizzo',
        addressText: 'Karspeldreef 6A\n1101 CJ Amsterdam\nThe Netherlands'
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
    },
    services: {
      title: 'I Nostri Servizi',
      subtitle: 'Elenco completo dei servizi bancari autorizzati in Italia',
      backToHome: 'Torna alla Home',
      note: 'Per informazioni dettagliate sui nostri servizi, contattaci.',
      tableHeaders: {
        service: 'Servizio',
        modality: 'Modalità',
        state: 'Stato',
        authDate: 'Data Autorizzazione',
        revokeDate: 'Data Revoca',
        startDate: 'Inizio Operatività',
        endDate: 'Fine Operatività'
      }
    },
    admin: {
      title: 'Area Amministrativa',
      login: {
        title: 'Accesso Admin',
        username: 'Username',
        password: 'Password',
        submit: 'Accedi',
        error: 'Credenziali non valide'
      },
      garanzie: {
        title: 'Gestione Garanzie Fideiussorie',
        createNew: 'Nuova Garanzia',
        form: {
          numeroGaranzia: 'Numero di Garanzia',
          nomeCompleto: 'Nome Completo',
          contraente: 'Contraente',
          beneficiario: 'Beneficiario',
          importoGarantito: 'Importo Garantito',
          dataInizio: 'Data Inizio Atto Fideiussione',
          dataCessazione: 'Data Cessazione Atto Fideiussione',
          data: 'Data',
          stato: 'Stato',
          approvato: 'Approvato',
          denegato: 'Denegato',
          submit: 'Crea Garanzia',
          success: 'Garanzia creata con successo!',
          downloadQR: 'Scarica QR Code'
        },
        list: {
          title: 'Lista Garanzie',
          empty: 'Nessuna garanzia trovata',
          downloadQR: 'Scarica QR',
          viewPage: 'Vedi Pagina'
        }
      }
    },
    garanzia: {
      title: 'Stato Garanzia Fideiussoria',
      numeroGaranzia: 'Numero di Garanzia',
      contraente: 'Contraente',
      beneficiario: 'Beneficiario',
      importoGarantito: 'Importo Garantito',
      dataInizio: 'Data Inizio',
      dataCessazione: 'Data Cessazione',
      message: 'La garanzia fideiussoria di {nome} è stato {stato}.',
      approvato: 'approvato',
      denegato: 'denegato',
      saluti: 'Cordiali saluti,',
      bank: 'Nexent Bank.it',
      notFound: 'Garanzia non trovata',
      backToHome: 'Torna alla Home'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
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
      description: 'We are a boutique bank with headquarters in Amsterdam and international subsidiaries and clients all over the world. Our main offices are located in the Netherlands, Switzerland and Romania. In addition, we also have offices in Germany, Malta and Ukraine.',
      italyNote: 'In Italy, the Bank operates under freedom to provide services, Bank of Italy authorization no.21030.',
      services: 'Our Services',
      servicesSubtitle: 'Tailored banking solutions for your needs',
      servicesNote: 'For detailed information about our services, please contact us.'
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
        address: 'Address',
        addressText: 'Karspeldreef 6A\n1101 CJ Amsterdam\nThe Netherlands'
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
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete list of banking services authorized in Italy',
      backToHome: 'Back to Home',
      note: 'For detailed information about our services, please contact us.',
      tableHeaders: {
        service: 'Service',
        modality: 'Modality',
        state: 'State',
        authDate: 'Authorization Date',
        revokeDate: 'Revocation Date',
        startDate: 'Start Date',
        endDate: 'End Date'
      }
    },
    admin: {
      title: 'Administrative Area',
      login: {
        title: 'Admin Login',
        username: 'Username',
        password: 'Password',
        submit: 'Login',
        error: 'Invalid credentials'
      },
      garanzie: {
        title: 'Insurance Guarantee Management',
        createNew: 'New Guarantee',
        form: {
          nomeCompleto: 'Full Name',
          data: 'Date',
          stato: 'Status',
          approvato: 'Approved',
          denegato: 'Denied',
          submit: 'Create Guarantee',
          success: 'Guarantee created successfully!',
          downloadQR: 'Download QR Code'
        },
        list: {
          title: 'Guarantees List',
          empty: 'No guarantees found',
          downloadQR: 'Download QR',
          viewPage: 'View Page'
        }
      }
    },
    garanzia: {
      title: 'Insurance Guarantee Status',
      message: 'The insurance guarantee for {nome} dated {data} has been {stato}.',
      approvato: 'approved',
      denegato: 'denied',
      saluti: 'Best regards,',
      bank: 'Nexent Bank.it',
      notFound: 'Guarantee not found',
      backToHome: 'Back to Home'
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