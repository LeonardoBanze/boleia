import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'react-feather';
import { useState } from 'react';

export default function Topbar() {
  const [language, setLanguage] = useState('PT');

  return (
    <div className="bg-[#640000] text-white text-sm hidden md:block">
      <div className="container mx-auto px-6 py-2 flex flex-wrap justify-between items-center">
        {/* Contato */}
        <div className="flex flex-wrap justify-center gap-6 items-center mr-12">
          <span className="flex items-center gap-1">
            <Phone size={16} />
            +258 87 676 7678
          </span>

          <span className="flex items-center gap-1">
            <Mail size={16} />
            info@boleiachain.com
          </span>

          <span className="flex items-center gap-1">
            <MapPin size={16} />
            Moçambique, Maputo
          </span>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-wrap justify-center gap-6 items-center">
          <a href="#" className="hover:text-gray-300 flex items-center gap-1">
            <Facebook size={16} /> Facebook
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center gap-1">
            <Instagram size={16} /> Instagram
          </a>
          <a href="#" className="hover:text-gray-300 flex items-center gap-1">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        {/* Seletor de idioma */}
        <div className="flex items-center gap-4 ml-12">
          <button
            onClick={() => setLanguage('PT')}
            className={`flex items-center gap-1 px-2 py-1 rounded ${
              language === 'PT' ? 'bg-white text-[#640000]' : 'hover:bg-white hover:text-[#640000]'
            } transition-colors duration-200`}
            aria-label="Português"
          >
            🇵🇹 <span className="font-semibold">PT</span>
          </button>

          <button
            onClick={() => setLanguage('EN')}
            className={`flex items-center gap-1 px-2 py-1 rounded ${
              language === 'EN' ? 'bg-white text-[#640000]' : 'hover:bg-white hover:text-[#640000]'
            } transition-colors duration-200`}
            aria-label="English"
          >
            🇬🇧 <span className="font-semibold">EN</span>
          </button>
        </div>
      </div>
    </div>
  );
}
