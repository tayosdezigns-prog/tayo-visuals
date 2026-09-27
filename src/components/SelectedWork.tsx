import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types/portfolio';
import { PROJECTS } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { Play, ArrowUpRight, Film, Clock, Sparkles } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'ALL',
  'AI COMMERCIAL',
  'PRODUCT ADS',
  'BRAND FILM',
  'CINEMATIC',
  'SOCIAL',
  'EXPERIMENTAL'
];

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const secondaryProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 w-full max-w-[1440px] mx-auto">
      {/* Section Header: Editorial & Minimal */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-neutral-700/20">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SELECTED ARCHIVE 2026</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none">
            Commercial <br />
            <span className="text-[#d4af37] font-serif-cinzel font-normal italic">Reel</span> &amp; Films
          </h2>
        </div>

        {/* Category Filtering Tabs (Interactive Filter Controls - conforming to constitution) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-lg border border-neutral-700/30 bg-neutral-900/10 backdrop-blur-sm">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider uppercase transition-all duration-200 rounded-md whitespace-nowrap ${
                activeCategory === category
                  ? theme === 'dark'
                    ? 'bg-neutral-100 text-neutral-950 shadow-md'
                    : 'bg-neutral-950 text-white shadow-md'
                  : theme === 'dark'
                  ? 'text-neutral-400 hover:text-white hover:bg-white/5'
                  : 'text-neutral-600 hover:text-black hover:bg-black/5'
              }`}
              data-cursor="pointer"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED PROJECTS: WIDESCREEN CINEMATIC EXPERIENCES */}
      {featuredProjects.length > 0 && (
        <div className="space-y-24 md:space-y-36 mb-32">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer"
              data-cursor="view"
            >
              {/* Media Container with Widescreen Ratio */}
              <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-md bg-neutral-950 shadow-2xl border border-neutral-800/40">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-full object-cover object-center filter brightness-[0.88] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />

                {/* Measured Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 transition-opacity duration-300" />

                {/* Cinematic Letterbox Mask Lines */}
                <div className="absolute top-0 left-0 right-0 h-3 md:h-5 bg-black/60 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-3 md:h-5 bg-black/60 pointer-events-none" />

                {/* Top Overlay: Speculative Metadata (Zero-Pill Discipline) */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-white/90">
                  <div className="flex items-center gap-2">
                    <span className="text-[#d4af37]">0{idx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.label}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.categoryLabel}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-white/70">
                    <Clock className="w-3 h-3" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Center Hover Trigger / Play Prompt */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#d4af37]/90 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-2xl">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>

                {/* Bottom Media Bar */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-serif-cinzel italic text-neutral-300 tracking-wide">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-white/80">
                    <span className="hidden lg:inline-block max-w-md text-right text-neutral-300 font-sans line-clamp-1">
                      {project.concept}
                    </span>
                    <div className="flex items-center gap-1 text-[#d4af37] font-bold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                      <span>ENTER FILM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimal Clean Metadata strip underneath */}
              <div className="mt-4 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-400 gap-3">
                <div className="flex items-center gap-2">
                  <span>Client: {project.client}</span>
                  <span aria-hidden="true">/</span>
                  <span>Role: {project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span key={tool} className="text-neutral-500">
                      #{tool.replace(/\s+/g, '')}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* SECONDARY & ASYMMETRICAL EDITORIAL PORTFOLIO PIECES */}
      {secondaryProjects.length > 0 && (
        <div>
          <div className="mb-10 flex items-center justify-between">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-neutral-400">
              COMMERCIAL ARCHIVE &amp; SPECULATIVE STUDIES ({secondaryProjects.length})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {secondaryProjects.map((project, index) => {
              // Asymmetric layout logic for rhythmic visual variety
              const colSpan =
                project.aspect === '9:16'
                  ? 'lg:col-span-4'
                  : index % 3 === 0
                  ? 'lg:col-span-8'
                  : 'lg:col-span-6';

              const aspectClass =
                project.aspect === '9:16'
                  ? 'aspect-[9/16]'
                  : project.aspect === '16:9'
                  ? 'aspect-[16/9]'
                  : 'aspect-[4/3]';

              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group cursor-pointer ${colSpan} flex flex-col justify-between`}
                  data-cursor="view"
                >
                  <div
                    className={`relative w-full ${aspectClass} overflow-hidden rounded-md bg-neutral-950 border border-neutral-800/40 shadow-xl`}
                  >
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-center filter brightness-[0.9] transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    {/* Top unboxed metadata */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-wider text-white/80">
                      <span>{project.label}</span>
                      <span className="text-[#d4af37]">{project.duration}</span>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="px-4 py-2 bg-white/95 text-black font-display font-bold text-xs tracking-widest uppercase rounded-sm flex items-center gap-1.5 shadow-lg">
                        <Film className="w-3.5 h-3.5" />
                        <span>VIEW SCENE</span>
                      </div>
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="font-display font-extrabold text-2xl md:text-3xl text-white tracking-tight uppercase leading-tight">
                        {project.title}
                      </h4>
                      <p className="text-xs font-serif-cinzel italic text-neutral-300">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Clean unboxed footer */}
                  <div className="mt-3 flex items-center justify-between text-xs text-neutral-400 font-mono">
                    <span>{project.categoryLabel.split('/')[0].trim()}</span>
                    <span className="text-neutral-500">{project.year}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
