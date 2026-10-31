import React from 'react';
import { ArrowUp, Mail, MessageSquare, MapPin, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-[#07080d] py-16 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-2xl font-black text-white tracking-tight font-display">
              {PERSONAL_INFO.name}
            </h2>
            <p className="text-base text-zinc-300 font-medium max-w-sm">
              "Building modern websites for businesses."
            </p>
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>Location: {PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Clickable Email & WhatsApp links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold">
              Connect Directly
            </h4>
            <div className="space-y-2.5 text-sm">
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-zinc-300 hover:text-indigo-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-zinc-500" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </div>
              <div>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-zinc-300 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp: {PERSONAL_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>© 2026 Sanskar. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-zinc-500">Crafted with precision in Pune</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
