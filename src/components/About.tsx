import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Laptop, Code2, Sparkles, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [puneTime, setPuneTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setPuneTime(timeStr);
      } catch {
        setPuneTime('Pune, India');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Professional Modern Profile / Studio Emblem Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-zinc-950/70 border border-zinc-800 p-8 sm:p-10 flex flex-col items-center text-center shadow-2xl overflow-hidden group">
              {/* Radial gradient background accent */}
              <div
                className="absolute inset-0 bg-radial from-indigo-500/10 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Monogram Studio Seal */}
              <div className="relative mb-6">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-zinc-800 via-zinc-900 to-[#0c0d16] border border-zinc-700/80 flex items-center justify-center shadow-inner group-hover:border-indigo-500/50 transition-colors duration-300">
                  <span className="text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-indigo-400 font-display">
                    S
                  </span>
                </div>
                {/* Floating craft icon */}
                <div className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 rounded-lg text-white shadow-lg">
                  <Code2 className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Identity */}
              <h3 className="text-2xl font-extrabold text-white font-display mb-1">
                {PERSONAL_INFO.displayName}
              </h3>
              <p className="text-xs uppercase tracking-wider text-indigo-400 font-medium mb-6">
                {PERSONAL_INFO.title}
              </p>

              {/* Studio Metadata List */}
              <div className="w-full space-y-3 pt-6 border-t border-zinc-800/80 text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" /> Location
                  </span>
                  <span className="font-medium text-white">{PERSONAL_INFO.location}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" /> Local Time
                  </span>
                  <span className="font-mono text-zinc-200">{puneTime || 'IST (GMT+5:30)'}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <Laptop className="w-3.5 h-3.5 text-zinc-400" /> Daily Rig
                  </span>
                  <a
                    href="#gadgets"
                    className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                  >
                    ASUS TUF A16 & Nord 4
                  </a>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> Status
                  </span>
                  <span className="text-emerald-400 font-medium">Accepting New Projects</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: About Me Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
              BACKGROUND & PHILOSOPHY
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-8">
              {PERSONAL_INFO.aboutHeading}
            </h2>

            {/* Verbatim Paragraphs from user brief */}
            <div className="space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.aboutParagraphs.map((para, pIdx) => (
                <p key={pIdx}>{para}</p>
              ))}
            </div>

            {/* Short introduction callout */}
            <div className="p-5 bg-zinc-900/60 border border-zinc-800 rounded-xl max-w-2xl mb-8">
              <p className="text-sm text-zinc-300 italic leading-relaxed">
                "{PERSONAL_INFO.intro}"
              </p>
            </div>

            {/* Action */}
            <button
              onClick={onContactClick}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all shadow-md shadow-indigo-950 flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let's Discuss Your Project</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
