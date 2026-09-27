import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 w-full max-w-[1440px] mx-auto border-t border-neutral-700/20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div className="text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37] flex items-center gap-2">
            <Quote className="w-3.5 h-3.5" />
            <span>INDUSTRY PERSPECTIVES</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2 rounded border border-neutral-700 hover:border-[#d4af37] transition-colors"
              aria-label="Previous testimonial"
              data-cursor="pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-neutral-500 px-2">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={next}
              className="p-2 rounded border border-neutral-700 hover:border-[#d4af37] transition-colors"
              aria-label="Next testimonial"
              data-cursor="pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Large Editorial Typography Quote */}
        <blockquote className="space-y-8">
          <p className="font-serif-cinzel italic text-2xl sm:text-4xl md:text-5xl leading-tight text-neutral-100">
            "{current.quote}"
          </p>

          <footer className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <div className="font-display font-extrabold text-xl text-white uppercase tracking-tight">
                {current.author}
              </div>
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest mt-1">
                {current.role} · <span className="text-[#d4af37]">{current.company}</span>
              </div>
            </div>

            <div className="text-xs font-mono text-neutral-500 uppercase">
              FOCUS: {current.projectFocus}
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};
