import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div>
            <div className="mb-4">
              <img 
                src="https://static.wikia.nocookie.net/logopedia/images/2/2c/Nexent_Bank.svg/revision/latest?cb=20250712111731" 
                alt="Nexent Bank Logo" 
                className="h-8 brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 mb-6">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.nav.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <a href="tel:+393714607246" className="hover:text-emerald-400 transition-colors duration-200 block">
                    +39 371 460 7246
                  </a>
                  <a href="tel:+310620940564" className="hover:text-emerald-400 transition-colors duration-200 block">
                    +31 06 2094 0564
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@nexentbank.it" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                  info@nexentbank.it
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">Italia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('why');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  {t.nav.why}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Nexent Bank Italia. {t.footer.rights}
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                {t.footer.links.privacy}
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                {t.footer.links.terms}
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors duration-200">
                {t.footer.links.cookies}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;