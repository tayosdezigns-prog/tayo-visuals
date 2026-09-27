import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { Film, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const CreativeProcess: React.FC = () => {
  const { theme } = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 w-full max-w-[1440px] mx-auto border-t border-neutral-700/20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-700/20">
        <div>
          <div className="text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37] mb-3 flex items-center gap-2">
            <Film className="w-3.5 h-3.5" />
            <span>PRODUCTION BLUEPRINT</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none">
            The Creative <br />
            <span className="text-[#d4af37] font-serif-cinzel font-normal italic">Process</span>
          </h2>
        </div>

        <p className="text-xs md:text-sm font-mono text-neutral-400 max-w-sm uppercase">
          [FIVE DISCIPLINED STAGES TURNING ABSTRACT BRAND CONCEPTS INTO BROADCAST-GRADE COMMERCIAL VISUALS]
        </p>
      </div>

      {/* Interactive Production Progress Bar */}
      <div className="grid grid-cols-5 gap-2 mb-12">
        {PROCESS_STEPS.map((step, idx) => (
          <button
            key={step.number}
            onClick={() => setActiveStep(idx)}
            className={`text-left p-3 md:p-4 rounded border transition-all duration-300 ${
              activeStep === idx
                ? 'border-[#d4af37] bg-neutral-900/60 shadow-lg'
                : 'border-neutral-800/80 bg-neutral-950/20 hover:border-neutral-700 opacity-60 hover:opacity-90'
            }`}
            data-cursor="pointer"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#d4af37] mb-1">
              <span>{step.number}</span>
              <span className="hidden sm:inline text-neutral-500">{step.timeline}</span>
            </div>
            <div className="font-display font-bold text-xs sm:text-sm uppercase tracking-tight line-clamp-1">
              {step.title.split('&')[0]}
            </div>
          </button>
        ))}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div
        className={`p-8 md:p-12 rounded-lg border transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-neutral-900/30 border-white/10'
            : 'bg-neutral-100/90 border-neutral-300'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-[#d4af37]">
              <span>PHASE {PROCESS_STEPS[activeStep].number}</span>
              <span>·</span>
              <span>ESTIMATED DURATION: {PROCESS_STEPS[activeStep].timeline}</span>
            </div>

            <h3 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight leading-tight">
              {PROCESS_STEPS[activeStep].title}
            </h3>

            <p className="font-serif-cinzel italic text-lg sm:text-xl text-[#d4af37]">
              "{PROCESS_STEPS[activeStep].tagline}"
            </p>

            <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {PROCESS_STEPS[activeStep].description}
            </p>

            <div className="pt-6 border-t border-neutral-700/30 flex items-center gap-4">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : PROCESS_STEPS.length - 1))}
                className="px-4 py-2 text-xs font-mono tracking-wider uppercase border border-neutral-700 rounded hover:border-[#d4af37] transition-colors"
                data-cursor="pointer"
              >
                ← PREV STAGE
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < PROCESS_STEPS.length - 1 ? prev + 1 : 0))}
                className="px-5 py-2 text-xs font-mono tracking-wider uppercase bg-[#d4af37] text-neutral-950 font-bold rounded hover:bg-white transition-colors flex items-center gap-1.5"
                data-cursor="pointer"
              >
                <span>NEXT STAGE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-md bg-neutral-950/60 border border-neutral-800 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block font-semibold">
              KEY PHASE ARTIFACTS
            </span>

            <div className="space-y-3">
              {PROCESS_STEPS[activeStep].artifacts.map((artifact) => (
                <div key={artifact} className="flex items-start gap-2.5 text-xs text-neutral-300 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>{artifact}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-neutral-800 text-[11px] font-mono text-neutral-500">
              Direct stakeholder collaboration checkpoint with versioned DaVinci / Frame.io review links.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
