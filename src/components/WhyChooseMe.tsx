import React from 'react';
import { motion } from 'motion/react';
import {
  Palette,
  Smartphone,
  Sparkles,
  MessageSquareText,
  Target,
  UserCheck,
} from 'lucide-react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';

export const WhyChooseMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-400" />;
      case 'SmartphoneCheck':
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-indigo-300" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      case 'MessageSquareText':
        return <MessageSquareText className="w-5 h-5 text-indigo-300" />;
      case 'Target':
        return <Target className="w-5 h-5 text-indigo-400" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-indigo-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="why-me" className="py-24 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            VALUE & ETHOS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Why Choose Me?
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Honest craftsmanship, dependable communication, and bespoke design. No generic templates,
            no outsourced middlemen, and no exaggerated marketing claims.
          </p>
        </div>

        {/* 6 Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              className="bg-zinc-950/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-7 hover:border-zinc-700/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-5">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2.5">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
