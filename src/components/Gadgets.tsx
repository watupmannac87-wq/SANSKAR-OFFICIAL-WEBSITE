import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Laptop,
  Smartphone,
  Cpu,
  Monitor,
  CheckCircle2,
  Maximize2,
  Sparkles,
  Zap,
  Flame,
  ShieldCheck,
  X,
} from 'lucide-react';
import { GADGETS_DATA } from '../data/portfolioData';

export const Gadgets: React.FC = () => {
  const [selectedGadgetId, setSelectedGadgetId] = useState<string>('asus-tuf-a16');
  const [isPhotoLightboxOpen, setIsPhotoLightboxOpen] = useState(false);

  const activeGadget =
    GADGETS_DATA.items.find((item) => item.id === selectedGadgetId) || GADGETS_DATA.items[0];

  return (
    <section id="gadgets" className="py-24 border-t border-zinc-800/80 relative">
      {/* Subtle ambient glow in sync with the neon setup */}
      <div
        className="absolute top-1/3 left-10 w-[500px] h-[350px] bg-violet-600/8 blur-[140px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            CREATOR SETUP & HARDWARE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Gadgets & Development Rig.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            The dedicated hardware I rely on daily to design, code, render, and rigorously test
            responsive websites on real screens.
          </p>
        </div>

        {/* Main Workstation Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-12">
          {/* Left: Workstation Desk Photo */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative group rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl flex-1 flex flex-col justify-between">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-zinc-900">
                <img
                  src={GADGETS_DATA.workstationImage}
                  alt="Sanskar's creator workstation featuring ASUS TUF A16 laptop and OnePlus Nord 4 smartphone"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Subtle scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Lightbox trigger button */}
                <button
                  onClick={() => setIsPhotoLightboxOpen(true)}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/10 transition-colors shadow-lg cursor-pointer"
                  title="View full desk setup"
                  aria-label="Enlarge desk photograph"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Hotspot chips overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedGadgetId('asus-tuf-a16')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer ${
                        selectedGadgetId === 'asus-tuf-a16'
                          ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                          : 'bg-black/60 text-zinc-300 hover:text-white border border-white/10'
                      }`}
                    >
                      <Laptop className="w-3.5 h-3.5" />
                      <span>ASUS TUF A16</span>
                    </button>

                    <button
                      onClick={() => setSelectedGadgetId('oneplus-nord-4')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium backdrop-blur-md transition-all flex items-center gap-1.5 cursor-pointer ${
                        selectedGadgetId === 'oneplus-nord-4'
                          ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                          : 'bg-black/60 text-zinc-300 hover:text-white border border-white/10'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>OnePlus Nord 4</span>
                    </button>
                  </div>

                  <span className="text-[11px] text-zinc-400 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 hidden sm:inline">
                    Personal Studio Battlestation
                  </span>
                </div>
              </div>

              {/* Photo caption footer strip */}
              <div className="p-4 sm:p-5 border-t border-zinc-800 bg-[#0c0d15] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
                  <span className="text-zinc-200 font-medium">
                    "Dream Big · Code Harder · Achieve More"
                  </span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500">
                  <span>Pune Creative Desk</span>
                  <span>·</span>
                  <span>Ambient RGB & Dual Screens</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Active Gadget Deep Dive */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Gadget Selector Tabs */}
                <div className="flex items-center gap-2 p-1 bg-zinc-900 border border-zinc-800 rounded-xl mb-6">
                  {GADGETS_DATA.items.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedGadgetId(item.id)}
                      className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        selectedGadgetId === item.id
                          ? 'bg-zinc-800 text-white shadow-sm'
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {item.id === 'asus-tuf-a16' ? (
                        <Laptop className="w-3.5 h-3.5" />
                      ) : (
                        <Smartphone className="w-3.5 h-3.5" />
                      )}
                      <span className="truncate">{item.name}</span>
                    </button>
                  ))}
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-2 text-xs text-indigo-400 mb-2 font-medium">
                  <span>{activeGadget.category}</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-zinc-400">{activeGadget.role}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display mb-4">
                  {activeGadget.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {activeGadget.description}
                </p>

                {/* Specifications Checklist */}
                <div className="space-y-3 pt-4 border-t border-zinc-800/80 mb-6">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-2">
                    Key Performance Factors
                  </span>
                  {activeGadget.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Value Callout */}
              <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl mt-4">
                <div className="flex items-start gap-2.5 text-xs text-zinc-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block mb-0.5">
                      {activeGadget.id === 'asus-tuf-a16'
                        ? 'Why it benefits your project:'
                        : 'Real-world quality assurance:'}
                    </strong>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      {activeGadget.id === 'asus-tuf-a16'
                        ? 'High sustained compute speeds allow me to design, build, and deploy custom interactive web features smoothly and deliver projects on schedule.'
                        : 'Your website is tested directly on this modern phone to ensure real finger taps, mobile fonts, and menus feel fast and natural to visitors.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: ASUS TUF A16 */}
          <div className="p-6 bg-zinc-950/40 border border-zinc-800/80 rounded-2xl hover:border-zinc-700/80 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Laptop className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-500">Workstation Rig</span>
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">
                ASUS TUF Gaming A16
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Heavy-duty development laptop with a dedicated 16-inch high-refresh screen, multi-threaded
                compilation performance, and military-grade durability for round-the-clock coding.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-3 border-t border-zinc-800">
              <Cpu className="w-3.5 h-3.5" />
              <span>Full-Stack Development & Design Engine</span>
            </div>
          </div>

          {/* Card 2: OnePlus Nord 4 */}
          <div className="p-6 bg-zinc-950/40 border border-zinc-800/80 rounded-2xl hover:border-zinc-700/80 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-zinc-500">Mobile Testbed</span>
              </div>
              <h4 className="text-lg font-bold text-white font-display mb-2">
                OnePlus Nord 4
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                Precision all-metal unibody smartphone running at 120Hz Ultra AMOLED, used as the
                standard device for inspecting touch responsiveness, load speeds, and UI ergonomics.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-indigo-400/90 pt-3 border-t border-zinc-800">
              <Zap className="w-3.5 h-3.5" />
              <span>Mobile Responsiveness & Touch Quality Check</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full Resolution Desk Photo */}
      {isPhotoLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative max-w-5xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-800 bg-[#090A10]">
              <div className="flex items-center gap-2 text-xs text-zinc-300">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="font-semibold text-white">Sanskar's Creator Setup</span>
                <span>·</span>
                <span>ASUS TUF A16 & OnePlus Nord 4</span>
              </div>
              <button
                onClick={() => setIsPhotoLightboxOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-2 sm:p-4 bg-black flex items-center justify-center max-h-[80vh] overflow-hidden">
              <img
                src={GADGETS_DATA.workstationImage}
                alt="Enlarged view of Sanskar's creator setup"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
