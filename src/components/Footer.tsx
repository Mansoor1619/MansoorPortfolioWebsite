import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { iconsData } from '../data/iconData';
import { personalData } from '../data/personalData';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl font-bold gradient-text">Muhammad Mansoor</h2>
            <p className="text-gray-500 text-sm text-center md:text-left max-w-xs">
              Unreal Engine Developer crafting immersive experiences
            </p>
            <div className="flex gap-3">
              {iconsData.slice(0, 5).map((social) => {
                const url = personalData[social.id as keyof typeof personalData];
                if (!url) return null;
                return (
                  <a key={social.id} href={`${social.url}${url}`} target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 hover:border-teal-500/50 hover:bg-teal-500/10 transition-all duration-300 group">
                    <img src={social.icon} alt={social.name}
                      className="w-4 h-4 brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className="text-gray-500 hover:text-teal-400 text-sm transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <Heart size={14} className="text-teal-400" />
              <span>2025 Muhammad Mansoor. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-teal-500/25 hover:scale-110 transition-all duration-300 cursor-pointer"
      >
        <ArrowUp size={18} className="text-white" />
      </button>
    </footer>
  );
};

export default Footer;
