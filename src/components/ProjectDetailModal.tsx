import React, { useEffect, useState } from 'react';
import { Project } from '../types/portfolio';
import { PROJECTS } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { X, Play, Pause, ChevronLeft, ChevronRight, Sliders, Volume2, Film, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject
}) => {
  const { theme } = useTheme();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timecode, setTimecode] = useState<number>(0);
  const [activeShotIndex, setActiveShotIndex] = useState<number>(0);

  // Keyboard escape listener and arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!project) return;
      const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
      if (e.key === 'ArrowRight' && currentIndex < PROJECTS.length - 1) {
        onSelectProject(PROJECTS[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        onSelectProject(PROJECTS[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose, onSelectProject]);

  // Simulated playback timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimecode((prev) => {
          if (prev >= 45) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Reset when project changes
  useEffect(() => {
    setIsPlaying(false);
    setTimecode(0);
    setActiveShotIndex(0);
  }, [project]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `00:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:18`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-black/95 text-white overflow-y-auto backdrop-blur-xl">
      {/* Top Fixed Control Bar */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/80 backdrop-blur-md border-b border-neutral-800">
        <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-neutral-400">
          <span className="text-[#d4af37] font-bold">PROJECT // 0{currentIndex + 1}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{project.label}</span>
          <span className="hidden md:inline">·</span>
          <span className="hidden md:inline">{project.type}</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Navigation Prev / Next */}
          <div className="hidden sm:flex items-center gap-1 border-r border-neutral-800 pr-3 mr-1">
            <button
              onClick={() => prevProject && onSelectProject(prevProject)}
              disabled={!prevProject}
              className={`p-1.5 rounded transition-colors ${
                prevProject ? 'hover:bg-neutral-800 text-white' : 'text-neutral-600 cursor-not-allowed'
              }`}
              title="Previous project"
              data-cursor="pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => nextProject && onSelectProject(nextProject)}
              disabled={!nextProject}
              className={`p-1.5 rounded transition-colors ${
                nextProject ? 'hover:bg-neutral-800 text-white' : 'text-neutral-600 cursor-not-allowed'
              }`}
              title="Next project"
              data-cursor="pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono tracking-wider uppercase bg-neutral-900 hover:bg-[#d4af37] hover:text-black transition-colors rounded-sm border border-neutral-700"
            data-cursor="close"
          >
            <span>CLOSE</span>
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Film Experience Canvas */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-12 py-8 space-y-16">
        {/* Full-width Cinematic Screen */}
        <section className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-neutral-950 border border-neutral-800 shadow-2xl">
          <img
            src={project.heroImage}
            alt={project.title}
            className={`w-full h-full object-cover object-center filter brightness-[0.92] transition-transform duration-1000 ${
              isPlaying ? 'scale-110' : 'scale-100'
            }`}
            referrerPolicy="no-referrer"
          />

          {/* Anamorphic Scope Letterbox */}
          <div className="absolute top-0 left-0 right-0 h-4 md:h-8 bg-black/80 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-4 md:h-8 bg-black/80 pointer-events-none" />

          {/* Film HUD Overlay */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-white/90">
            <div className="flex items-center gap-2 bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-ping' : 'bg-[#d4af37]'}`} />
              <span>{isPlaying ? 'PLAYING PROTOTYPE' : 'CINEMATIC STILL'}</span>
            </div>
            <div className="bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm">
              <span>TC {formatTime(timecode)}</span>
            </div>
          </div>

          {/* Play / Pause Interactive Trigger */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#d4af37] text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
              data-cursor="play"
              title={isPlaying ? 'Pause scene' : 'Play simulated cinematic scene'}
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </button>
          </div>

          {/* Scrubber Bar at Bottom */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center gap-4 text-xs font-mono text-white/80">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1 hover:text-[#d4af37]"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#d4af37] transition-all duration-300"
                style={{ width: `${(timecode / 45) * 100}%` }}
              />
            </div>
            <div className="flex items-center gap-2">
              <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>48kHz / 24-Bit</span>
            </div>
          </div>
        </section>

        {/* Project Header & Art Direction Thesis */}
        <section className="border-b border-neutral-800 pb-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37] block mb-2">
                {project.categoryLabel}
              </span>
              <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white leading-none">
                {project.title}
              </h1>
              <p className="font-serif-cinzel italic text-lg sm:text-2xl text-neutral-300 mt-2">
                {project.tagline}
              </p>
            </div>

            <div className="text-right">
              <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">PRODUCTION YEAR</div>
              <div className="font-display font-bold text-2xl text-white">{project.year}</div>
            </div>
          </div>

          {/* Editorial Metadata Grid (Strict Zero-Pill Discipline) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-neutral-800/80 text-xs font-mono">
            <div>
              <span className="text-neutral-500 uppercase tracking-wider block mb-1">CLIENT / BRAND</span>
              <span className="text-neutral-200 font-semibold">{project.client}</span>
              <span className="text-neutral-400 block text-[10px] mt-0.5">({project.label})</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-wider block mb-1">ROLE</span>
              <span className="text-neutral-200">{project.role}</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-wider block mb-1">RUNNING TIME</span>
              <span className="text-neutral-200">{project.duration} Master Cut</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase tracking-wider block mb-1">DELIVERABLE</span>
              <span className="text-neutral-200">4K ProRes 422 HQ</span>
            </div>
          </div>
        </section>

        {/* Narrative & Visual Direction Storytelling */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-neutral-800 pb-16">
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
              <Film className="w-5 h-5" />
              <span>THE COMMERCIAL THESIS</span>
            </h3>
            <p className="text-sm leading-relaxed text-neutral-300">
              {project.concept}
            </p>
            <div className="pt-4 border-t border-neutral-800">
              <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">COMMERCIAL OBJECTIVE</span>
              <p className="text-xs leading-relaxed text-neutral-400">
                {project.commercialObjective}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-display font-bold text-xl uppercase tracking-wider text-white flex items-center gap-2">
              <Sliders className="w-5 h-5 text-[#d4af37]" />
              <span>ART DIRECTION &amp; CINEMATOGRAPHY</span>
            </h3>
            <p className="text-sm leading-relaxed text-neutral-300">
              {project.artDirection}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="p-4 rounded-md bg-neutral-900/60 border border-neutral-800">
                <span className="text-[11px] font-mono text-[#d4af37] uppercase tracking-wider block mb-1">COLOR PROFILE &amp; LUT</span>
                <p className="text-xs text-neutral-300">{project.colorGrading}</p>
              </div>
              <div className="p-4 rounded-md bg-neutral-900/60 border border-neutral-800">
                <span className="text-[11px] font-mono text-[#d4af37] uppercase tracking-wider block mb-1">SOUND DESIGN IDENTITY</span>
                <p className="text-xs text-neutral-300">{project.soundDesignNotes}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Shot Sequence Breakdown: Step-by-Step Directorial Notes */}
        <section className="space-y-8 pb-12">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-bold text-xl sm:text-2xl uppercase tracking-wider text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#d4af37]" />
              <span>DIRECTOR'S SHOT SEQUENCE BREAKDOWN</span>
            </h3>
            <span className="text-xs font-mono text-neutral-500">
              {project.sequenceShots.length} SCENE MOVEMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.sequenceShots.map((shot, idx) => (
              <div
                key={shot.shotName}
                onClick={() => setActiveShotIndex(idx)}
                className={`p-5 rounded-md border transition-all cursor-pointer ${
                  activeShotIndex === idx
                    ? 'bg-neutral-900 border-[#d4af37]'
                    : 'bg-neutral-950/70 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-[#d4af37] mb-2">
                  <span>SHOT 0{idx + 1}</span>
                  <span>{shot.timecode}</span>
                </div>
                <h4 className="font-display font-bold text-base text-white mb-2">{shot.shotName}</h4>
                <div className="space-y-2 text-xs text-neutral-400">
                  <div>
                    <span className="text-neutral-500 font-mono block text-[10px]">CAMERA MOTION:</span>
                    <span>{shot.cameraMovement}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 font-mono block text-[10px]">LIGHTING / ATMOSPHERE:</span>
                    <span>{shot.lightingAndAtmosphere}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Production Stack & Tools Used */}
        <section className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div>
            <span className="text-neutral-500 uppercase tracking-wider block mb-1">INTEGRATED AI &amp; POST PIPELINE</span>
            <div className="flex flex-wrap gap-2 text-neutral-200">
              {project.tools.map((tool) => (
                <span key={tool} className="px-2.5 py-1 bg-neutral-900 rounded border border-neutral-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {prevProject && (
              <button
                onClick={() => onSelectProject(prevProject)}
                className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded transition-colors"
              >
                ← {prevProject.title}
              </button>
            )}
            {nextProject && (
              <button
                onClick={() => onSelectProject(nextProject)}
                className="px-4 py-2 bg-[#d4af37] hover:bg-white text-black font-bold rounded transition-colors"
              >
                {nextProject.title} →
              </button>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
