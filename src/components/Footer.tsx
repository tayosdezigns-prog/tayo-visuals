import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBrief?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrief }) => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Behance', href: 'https://behance.net' },
    { label: 'Vimeo', href: 'https://vimeo.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' }
  ];

  return (
    <footer className="relative border-t border-neutral-700/30 pt-20 pb-12 px-6 md:px-12 lg:px-16 w-full max-w-[1440px] mx-auto select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
        {/* Core Directorial Identity Phrases */}
        <div className="lg:col-span-8 space-y-2">
          <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37] mb-4">
            AURA FILM &amp; MOTION DIRECTORY
          </div>
          <div className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-none">
            AI Video Creator
          </div>
          <div className="font-display font-bold text-xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#d4af37] leading-none">
            Cinematic Video Editor
          </div>
          <div className="font-display font-medium text-lg sm:text-2xl md:text-3xl uppercase tracking-tight text-neutral-400 leading-none">
            AI Commercial &amp; Product Ads
          </div>
        </div>

        {/* Quick Actions & Socials */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
          <div>
            <button
              onClick={() => {
                if (onOpenBrief) onOpenBrief();
                else {
                  const elem = document.getElementById('contact');
                  if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group inline-flex items-center gap-2 text-base font-display font-bold tracking-widest uppercase text-white hover:text-[#d4af37] transition-colors"
              data-cursor="go"
            >
              <span>LET'S CREATE SOMETHING</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block">
              CHANNELS
            </span>
            <div className="flex flex-wrap gap-4 text-xs font-mono uppercase">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-[#d4af37] transition-colors"
                  data-cursor="pointer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Honest Portfolio Disclaimer & Back to Top */}
      <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
        <p className="max-w-xl text-[11px] leading-relaxed">
          * Notice: Commercial projects displayed within this portfolio represent self-initiated concept campaigns and speculative commercial studies created to demonstrate visual direction and generative video expertise. All trademarks belong to their respective concepts.
        </p>

        <div className="flex items-center gap-6 shrink-0">
          <span>© 2026 AURA MOTION STUDIO</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors"
            data-cursor="pointer"
            title="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
