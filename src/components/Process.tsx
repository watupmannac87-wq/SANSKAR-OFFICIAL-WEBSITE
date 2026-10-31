import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            HOW WE WORK
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            A Transparent, Four-Step Process.
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            From first conversation to live deployment, a predictable and collaborative workflow
            designed to deliver a stress-free experience.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-zinc-950/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-700/80 transition-colors"
            >
              <div>
                {/* Step indicator */}
                <div className="text-2xl font-black text-indigo-500/70 font-mono mb-4">
                  {step.step}
                </div>

                {/* Step title */}
                <h3 className="text-xl font-bold text-white font-display mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                {step.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2 text-[11px] text-zinc-400">
                    <CheckCircle2 className="w-3 h-3 text-indigo-400/80 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
