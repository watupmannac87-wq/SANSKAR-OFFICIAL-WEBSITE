import React from 'react';
import { motion } from 'motion/react';
import {
  Building2,
  UtensilsCrossed,
  Scissors,
  Flame,
  Smartphone,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-5 h-5 text-indigo-400" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-amber-400" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-indigo-300" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-rose-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-emerald-400" />;
      default:
        return <Building2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            WHAT I DO
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Specialized Website Services.
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Tailored digital solutions built from the ground up to solve real business challenges,
            engage local customers, and elevate brand perception.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-zinc-950/50 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                {/* Icon header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-zinc-500">0{idx + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white font-display mb-3 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 pt-4 border-t border-zinc-800/80 mb-6">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400/80 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-medium text-zinc-300 hover:text-indigo-400 transition-colors cursor-pointer group/btn"
              >
                <span>Request {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
