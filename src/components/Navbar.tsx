import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Why Me', href: '#why-me' },
    { label: 'About', href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#090A10]/90 backdrop-blur-md border-b border-zinc-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-zinc-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-white font-display whitespace-nowrap shrink-0 hover:text-indigo-400 transition-colors"
        >
          SANSKAR
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onContactClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-sm shadow-indigo-950 whitespace-nowrap shrink-0"
          >
            <span>Let's Discuss</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0b12] border-b border-zinc-800 px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-zinc-300 mb-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-1 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Let's Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/917276650422"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-center text-zinc-400 hover:text-indigo-400 py-1 transition-colors"
            >
              WhatsApp: +91 7276650422
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
