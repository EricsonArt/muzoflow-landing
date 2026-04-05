'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Music2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const el = document.getElementById('waitlist');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'O produkcie', href: '#solution' },
    { label: 'Funkcje', href: '#features' },
    { label: 'Cennik', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-[#3f3f46]/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="MuzoFlow — strona główna"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-[#8b5cf6]/25 group-hover:shadow-[#8b5cf6]/40 transition-shadow">
              <Music2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#a78bfa] to-[#8b5cf6] bg-clip-text text-transparent">
              MuzoFlow
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#a1a1aa] hover:text-[#fafafa] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={scrollToWaitlist}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-sm font-semibold hover:from-[#a78bfa] hover:to-[#8b5cf6] transition-all duration-200 shadow-lg shadow-[#8b5cf6]/25 hover:shadow-[#8b5cf6]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Dołącz teraz
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#18181b] transition-colors"
            aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#09090b]/95 backdrop-blur-md border-b border-[#3f3f46]/50"
          >
            <div className="max-w-6xl mx-auto px-4 pb-4 pt-2 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-[#a1a1aa] hover:text-[#fafafa] hover:bg-[#18181b] transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 border-t border-[#3f3f46]/50 mt-1">
                <button
                  onClick={scrollToWaitlist}
                  className="w-full px-5 py-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed] text-white text-sm font-semibold hover:from-[#a78bfa] hover:to-[#8b5cf6] transition-all duration-200"
                >
                  Dołącz teraz
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
