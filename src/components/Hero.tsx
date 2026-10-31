import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Sparkles, Laptop, Smartphone, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreWork: () => void;
  onDiscussProject: () => void;
  onOpenQuickDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onDiscussProject,
  onOpenQuickDemo,
}) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient glow (sparingly used) */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[380px] h-[300px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small text kicker */}
            <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-4 flex items-center gap-2">
              <span>INDEPENDENT WEB DESIGNER</span>
              <span className="text-zinc-600">|</span>
              <span>PUNE, INDIA</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display mb-6 text-balance">
              Building Digital Experiences That Make Businesses Stand Out.
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              I design modern, responsive, and professional websites that help businesses present
              themselves beautifully online.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onExploreWork}
                className="w-full sm:w-auto px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-indigo-950/50 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onDiscussProject}
                className="w-full sm:w-auto px-6 py-3.5 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-100 hover:text-white border border-zinc-700/80 hover:border-zinc-500 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-zinc-400" />
                <span>Let's Discuss Your Project</span>
              </button>
            </div>

            {/* Direct contact quick note */}
            <div className="flex items-center gap-4 text-xs text-zinc-400 pt-2 border-t border-zinc-800/80 w-full max-w-lg">
              <span className="text-zinc-300 font-medium">Direct Reach:</span>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                WhatsApp: {PERSONAL_INFO.phoneDisplay}
              </a>
              <span className="text-zinc-600">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-zinc-400 hover:text-indigo-400 transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Layered Multi-Device Website Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative group">
              {/* Decorative framing container */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50 p-2 shadow-2xl backdrop-blur-sm">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-zinc-950">
                  <img
                    src="/src/assets/images/hero_multi_device_mockup_1793433223423.jpg"
                    alt="Multi-device desktop and mobile website showcase designed by Sanskar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                  {/* Floating interactive badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-3 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-xs">
                    <div className="flex items-center gap-2 text-zinc-200">
                      <div className="flex gap-1">
                        <Laptop className="w-3.5 h-3.5 text-indigo-400" />
                        <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                      </div>
                      <span className="font-medium">Responsive Layout Architecture</span>
                    </div>

                    <button
                      onClick={onOpenQuickDemo}
                      className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-white font-medium rounded text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      Preview Demo
                    </button>
                  </div>
                </div>
              </div>

              {/* Minimal floating accent badge */}
              <div className="hidden sm:flex absolute -top-4 -right-4 p-3 rounded-xl bg-zinc-900/95 border border-zinc-700/80 shadow-xl backdrop-blur-md items-center gap-2.5 text-xs text-white">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <div>
                  <p className="font-semibold text-white leading-tight">Tailored Web Design</p>
                  <p className="text-[11px] text-zinc-400">Pune, India & Global</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Tagline & Audience Strip (Row below the hero split) */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs text-zinc-400 block mb-1 font-medium">Brand Positioning</span>
              <p className="text-lg md:text-xl font-bold text-white font-display">
                "{PERSONAL_INFO.tagline}"
              </p>
            </div>

            {/* Target Audience clean unboxed metadata */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-zinc-400">
              <span className="text-zinc-500 font-medium">Specialized For:</span>
              {PERSONAL_INFO.targetAudiences.map((audience, i) => (
                <React.Fragment key={audience}>
                  <span className="text-zinc-300">{audience}</span>
                  {i < PERSONAL_INFO.targetAudiences.length - 1 && (
                    <span className="text-zinc-700" aria-hidden="true">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
