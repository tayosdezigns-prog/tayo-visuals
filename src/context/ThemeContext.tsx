import React, { createContext, useContext, useEffect, useState } from 'react';
import gsap from 'gsap';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('aura_theme') as Theme;
      if (saved === 'dark' || saved === 'light') return saved;
      if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('aura_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    // Cinematic smooth transition using GSAP overlay animation
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[9999] pointer-events-none';
    overlay.style.backgroundColor = nextTheme === 'dark' ? '#08080a' : '#f7f6f2';
    overlay.style.opacity = '0';
    document.body.appendChild(overlay);

    gsap.timeline({
      onComplete: () => {
        setThemeState(nextTheme);
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.45,
          ease: 'power2.out',
          onComplete: () => {
            overlay.remove();
          }
        });
      }
    }).to(overlay, {
      opacity: 0.85,
      duration: 0.35,
      ease: 'power2.inOut'
    });
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
