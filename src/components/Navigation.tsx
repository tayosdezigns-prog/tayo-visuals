import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavigationProps {
  onOpenReel?: () => void;
  onOpenBrief?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenBrief }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? theme === 'dark'
              ? 'bg-[#08080a]/85 backdrop-blur-md border-b border-white/10 py-3.5'
              : 'bg-[#f7f6f2]/85 backdrop-blur-md border-b border-neutral-300/60 py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="font-display font-extrabold text-xl md:text-2xl tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-1.5"
            data-cursor="pointer"
          >
            <span>AURA</span>
            <span className="text-[#d4af37]">/</span>
            <span>MOTION</span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`text-xs uppercase font-medium tracking-[0.2em] transition-colors relative py-1 group ${
                  theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black'
                }`}
                data-cursor="pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* Animated Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className={`p-2 rounded-full border transition-all duration-200 ${
                theme === 'dark'
                  ? 'border-white/15 text-neutral-300 hover:text-white hover:border-[#d4af37]/60 hover:bg-white/5'
                  : 'border-neutral-300 text-neutral-700 hover:text-black hover:border-[#b8860b]/60 hover:bg-neutral-100'
              }`}
              data-cursor="pointer"
              title={`Switch to ${theme === 'dark' ? 'Light Gallery' : 'Cinematic Dark'} theme`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#d4af37] transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-[#b8860b] transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => {
                if (onOpenBrief) onOpenBrief();
                else handleLinkClick('#contact');
              }}
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-sm ${
                theme === 'dark'
                  ? 'bg-neutral-100 text-neutral-950 hover:bg-[#d4af37] hover:text-black'
                  : 'bg-neutral-950 text-white hover:bg-[#b8860b] hover:text-white'
              }`}
              data-cursor="go"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden flex flex-col justify-between p-8 pt-28 transition-all ${
            theme === 'dark' ? 'bg-[#08080a] text-white' : 'bg-[#f7f6f2] text-neutral-900'
          }`}
        >
          <div className="space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#d4af37] block font-mono">
              DIRECTOR NAVIGATION
            </span>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="font-display text-3xl font-extrabold tracking-tight flex items-baseline justify-between border-b border-neutral-700/30 pb-3"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-8 border-t border-neutral-700/30 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenBrief) onOpenBrief();
                else handleLinkClick('#contact');
              }}
              className="w-full py-4 text-center font-display font-bold text-sm tracking-widest uppercase bg-[#d4af37] text-neutral-950 flex items-center justify-center gap-2"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-between text-xs text-neutral-500 font-mono pt-2">
              <span>AURA STUDIO / 2026</span>
              <span>LONDON · TOKYO · NYC</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
