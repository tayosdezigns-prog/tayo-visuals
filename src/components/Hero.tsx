import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useTheme } from '../context/ThemeContext';
import { HERO_ASSET } from '../data/projects';
import { Play, ArrowDownRight, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenReel: () => void;
  onOpenBrief: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReel, onOpenBrief }) => {
  const { theme } = useTheme();
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for typography
      gsap.from('.hero-text-line', {
        y: 60,
        opacity: 0,
        duration: 1.1,
        stagger: 0.16,
        ease: 'power3.out',
        delay: 0.2
      });

      // Subtle atmospheric zoom on hero media
      gsap.to('.hero-image-scale', {
        scale: 1.06,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSec = document.getElementById('work');
    if (workSec) workSec.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden select-none"
    >
      {/* Cinematic Background Canvas with Media Layer */}
      <div
        ref={imageContainerRef}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <img
          src={HERO_ASSET}
          alt="Cinematic AI Film Director Still"
          className="hero-image-scale w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08] transition-all duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Cinematic atmospheric overlays adapted for theme */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            theme === 'dark'
              ? 'bg-gradient-to-t from-[#08080a] via-[#08080a]/60 to-[#08080a]/40'
              : 'bg-gradient-to-t from-[#f7f6f2] via-[#f7f6f2]/80 to-[#f7f6f2]/50 mix-blend-screen'
          }`}
        />

        {/* Film grain effect */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            theme === 'dark' ? 'film-grain' : 'film-grain-light'
          }`}
        />

        {/* Subtle anamorphic vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Floating Film Production Metadata Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between text-[11px] font-mono tracking-[0.25em] uppercase opacity-80 pt-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-800'}>
            REC · 24 FPS · 2.39:1 ANAMORPHIC
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-neutral-400">
          <span>GEN-3 · KLING · RESOLVE 19</span>
          <span>·</span>
          <span>4K MASTER SUITE</span>
        </div>
      </div>

      {/* Primary Cinematic Typography Block */}
      <div ref={headlineRef} className="relative z-10 my-auto py-12 md:py-16 max-w-6xl">
        {/* Line 1: AI VIDEO CREATOR */}
        <div className="overflow-hidden mb-1 md:mb-2">
          <h1 className="hero-text-line font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] uppercase">
            <span
              className={
                theme === 'dark'
                  ? 'text-white'
                  : 'text-neutral-900'
              }
            >
              AI Video
            </span>{' '}
            <span
              className={
                theme === 'dark'
                  ? 'text-neutral-400 font-normal italic font-serif-cinzel'
                  : 'text-neutral-600 font-normal italic font-serif-cinzel'
              }
            >
              Creator
            </span>
          </h1>
        </div>

        {/* Line 2: CINEMATIC VIDEO EDITOR */}
        <div className="overflow-hidden mb-1 md:mb-2 pl-0 sm:pl-8 md:pl-16">
          <h2 className="hero-text-line font-display font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.98] uppercase">
            <span className="text-[#d4af37]">Cinematic</span>{' '}
            <span
              className={
                theme === 'dark'
                  ? 'text-neutral-200'
                  : 'text-neutral-900'
              }
            >
              Video Editor
            </span>
          </h2>
        </div>

        {/* Line 3: AI COMMERCIAL & PRODUCT ADS */}
        <div className="overflow-hidden pl-0 sm:pl-16 md:pl-28 mt-2">
          <p className="hero-text-line font-display font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-snug uppercase text-neutral-300">
            <span
              className={
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-700'
              }
            >
              Commercial
            </span>{' '}
            <span className="text-white/40">&amp;</span>{' '}
            <span
              className={
                theme === 'dark'
                  ? 'text-white underline decoration-[#d4af37] decoration-1 underline-offset-8'
                  : 'text-neutral-950 underline decoration-[#b8860b] decoration-1 underline-offset-8'
              }
            >
              Product Ads
            </span>
          </p>
        </div>

        {/* Editorial Subtext / Positioning Thesis */}
        <div className="mt-10 sm:mt-12 max-w-xl pl-0 sm:pl-8 md:pl-16">
          <p
            className={`text-sm sm:text-base leading-relaxed font-light ${
              theme === 'dark' ? 'text-neutral-300/90' : 'text-neutral-800'
            }`}
          >
            Crafting commercial-quality narratives that transcend typical generative artifacts.
            Directing luxury product films, automotive campaigns, and cinematic brand stories with precision lighting,
            pacing, and human intention.
          </p>
        </div>
      </div>

      {/* Bottom Control Deck: Action CTAs + Reel Trigger */}
      <div className="relative z-10 pt-8 border-t border-neutral-700/30 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Interactive Reel Launcher Pill Button */}
        <button
          onClick={onOpenReel}
          className="group inline-flex items-center gap-4 py-3 px-5 rounded-full border border-neutral-600/50 bg-neutral-900/60 backdrop-blur-md text-white hover:border-[#d4af37] hover:bg-neutral-800/80 transition-all duration-300 w-fit"
          data-cursor="play"
        >
          <div className="w-8 h-8 rounded-full bg-[#d4af37] flex items-center justify-center text-black group-hover:scale-110 transition-transform">
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          </div>
          <div className="text-left font-mono">
            <div className="text-[10px] text-neutral-400 tracking-wider uppercase">2026 COMMERCIAL REEL</div>
            <div className="text-xs font-bold tracking-widest text-[#d4af37]">WATCH REEL (1:45)</div>
          </div>
        </button>

        {/* Dual Primary CTAs */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button
            onClick={scrollToWork}
            className={`inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase py-3 border-b-2 transition-all group ${
              theme === 'dark'
                ? 'text-white border-white/60 hover:border-[#d4af37] hover:text-[#d4af37]'
                : 'text-neutral-900 border-neutral-900 hover:border-[#b8860b] hover:text-[#b8860b]'
            }`}
            data-cursor="pointer"
          >
            <span>VIEW SELECTED WORK</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
          </button>

          <button
            onClick={onOpenBrief}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase py-3 px-6 bg-[#d4af37] text-neutral-950 hover:bg-white transition-all rounded-sm shadow-lg shadow-black/20"
            data-cursor="go"
          >
            <span>LET'S CREATE SOMETHING</span>
            <ArrowDownRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
