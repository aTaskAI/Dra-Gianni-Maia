import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../config/assets';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre o\nEscritório', href: '#sobre' },
  { label: 'Áreas de\nAtuação', href: '#areas' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80; // offset for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappLink = "https://api.whatsapp.com/send/?phone=5535987135775&text=Ol%C3%A1%21+Gostaria+de+agendar+uma+an%C3%A1lise+jur%C3%ADdica+do+meu+caso.&type=phone_number&app_absent=0";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A1128]/95 backdrop-blur-md border-b border-gold-500/20 py-4' : 'bg-[#0A1128]/80 backdrop-blur-md border-b border-gold-500/20 py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group" onClick={(e) => handleNavClick(e, '#inicio')}>
          {ASSETS.logo.light && (
            <img src={ASSETS.logo.light} alt="Gianni Maia Logo" className="h-10 w-auto object-contain" />
          )}
          <div className="flex flex-col leading-none">
            <span className="font-serif text-[22px] md:text-[26px] text-white tracking-wide group-hover:text-gold-500 transition-colors">
              Dr.<sup className="text-[0.5em] top-[-0.5em] relative">a</sup> Gianni Maia
            </span>
            <span className="text-[8px] md:text-[9px] tracking-[0.18em] text-white/90 uppercase mt-1">
              Advocacia Especializada
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-10">
          <ul className="flex items-center gap-10 text-[11px] uppercase tracking-widest font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-300 hover:text-gold-500 transition-colors block text-center leading-snug whitespace-nowrap"
                >
                  {link.label.split('\n').map((line, i, arr) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center bg-gold-500/90 hover:bg-gold-400 text-primary-900 px-8 py-3 text-[11px] font-bold uppercase tracking-widest transition-all leading-snug whitespace-nowrap shadow-sm"
          >
            <span>Falar com</span>
            <span>Advogado</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="xl:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0A1128] border-t border-white/10 overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm uppercase tracking-wider font-medium text-slate-200 hover:text-gold-500 transition-colors py-2 border-b border-white/5 whitespace-pre-line"
                >
                  {link.label.replace('\n', ' ')}
                </a>
              ))}
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center px-5 py-3 bg-gold-500 text-primary-900 font-bold tracking-wider uppercase text-sm rounded-sm"
              >
                Falar com Advogado
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
