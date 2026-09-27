import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CreativeProcess } from './components/CreativeProcess';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReelModal } from './components/ReelModal';
import { Project } from './types/portfolio';

const PortfolioApp: React.FC = () => {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isReelOpen, setIsReelOpen] = useState<boolean>(false);

  const handleOpenBrief = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 selection:bg-[#d4af37] selection:text-black ${
        theme === 'dark'
          ? 'bg-[#08080a] text-neutral-100'
          : 'bg-[#f7f6f2] text-neutral-900'
      }`}
    >
      {/* Custom Desktop GSAP Cursor */}
      <CustomCursor />

      {/* Floating Minimal Navigation Bar */}
      <Navigation
        onOpenReel={() => setIsReelOpen(true)}
        onOpenBrief={handleOpenBrief}
      />

      {/* Primary Layout Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenReel={() => setIsReelOpen(true)}
          onOpenBrief={handleOpenBrief}
        />

        {/* Selected Work / Portfolio Reel */}
        <SelectedWork onSelectProject={(p) => setSelectedProject(p)} />

        {/* Artistic About Manifesto */}
        <AboutSection />

        {/* Interactive Services Directory */}
        <ServicesSection onSelectService={() => handleOpenBrief()} />

        {/* Production Timeline & Blueprint */}
        <CreativeProcess />

        {/* Minimal Editorial Testimonials */}
        <Testimonials />

        {/* Cinematic Closing Section & Brief Builder */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer onOpenBrief={handleOpenBrief} />

      {/* Fullscreen Cinematic Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* 2026 Commercial Director Showreel Modal */}
      <ReelModal
        isOpen={isReelOpen}
        onClose={() => setIsReelOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
