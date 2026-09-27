import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/projects';
import { X, Play, Pause, Volume2, VolumeX, SkipForward, SkipBack, Maximize2 } from 'lucide-react';

interface ReelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReelModal: React.FC<ReelModalProps> = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  // Reel scenes list
  const reelScenes = PROJECTS.filter((p) => p.featured || p.aspect === '16:9').concat(PROJECTS.slice(0, 3));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Autoplay progression through reel scenes
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setCurrentProjectIndex((curr) => (curr + 1) % reelScenes.length);
            return 0;
          }
          return prev + 2.5; // Advances every 4 seconds per scene
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isOpen, isPlaying, reelScenes.length]);

  if (!isOpen) return null;

  const currentScene = reelScenes[currentProjectIndex];

  return (
    <div className="fixed inset-0 z-[110] bg-black/98 flex flex-col justify-between text-white backdrop-blur-2xl">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-neutral-800 bg-black/50">
        <div className="flex items-center gap-3 font-mono text-xs tracking-widest uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
          <span className="text-[#d4af37] font-bold">2026 COMMERCIAL DIRECTORS REEL</span>
          <span className="hidden sm:inline text-neutral-500">·</span>
          <span className="hidden sm:inline text-neutral-400">4K DCI · 2.39:1 ANAMORPHIC</span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 border border-neutral-700 hover:border-[#d4af37] text-xs font-mono tracking-wider uppercase rounded transition-colors"
          data-cursor="close"
        >
          <span>EXIT REEL</span>
          <X className="w-4 h-4" />
        </button>
      </header>

      {/* Center Cinematic Canvas */}
      <main className="relative flex-1 flex items-center justify-center p-4 md:p-8 overflow-hidden">
        <div className="relative aspect-[2.39/1] w-full max-w-6xl max-h-[75vh] overflow-hidden rounded-md bg-neutral-950 border border-neutral-800 shadow-2xl">
          <img
            key={currentScene.id}
            src={currentScene.heroImage}
            alt={currentScene.title}
            className="w-full h-full object-cover object-center filter brightness-[0.9] transition-all duration-700 scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Anamorphic Scope Lines */}
          <div className="absolute top-0 left-0 right-0 h-6 md:h-12 bg-black/90 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-6 md:h-12 bg-black/90 pointer-events-none" />

          {/* Live Reel Scene Metadata HUD */}
          <div className="absolute top-8 left-8 right-8 flex items-center justify-between text-xs font-mono tracking-widest text-white/90">
            <div>
              <span className="text-[#d4af37]">SCENE 0{currentProjectIndex + 1} / 0{reelScenes.length}</span>
              <div className="font-display font-extrabold text-xl sm:text-2xl uppercase mt-1">
                {currentScene.title}
              </div>
            </div>

            <div className="text-right text-[11px] text-neutral-300">
              <div>{currentScene.categoryLabel}</div>
              <div className="text-[#d4af37]">{currentScene.label}</div>
            </div>
          </div>

          {/* Sound / Waveform visualization */}
          <div className="absolute bottom-8 left-8 flex items-center gap-1.5">
            {[40, 75, 55, 90, 60, 80, 45, 95, 70, 50].map((h, i) => (
              <span
                key={i}
                className="w-1 bg-[#d4af37] rounded-full transition-all duration-150"
                style={{
                  height: isPlaying ? `${h * (isMuted ? 0.1 : 0.4)}px` : '4px',
                  opacity: isMuted ? 0.2 : 0.8
                }}
              />
            ))}
            <span className="ml-2 text-[10px] font-mono tracking-wider text-neutral-400">
              {isMuted ? 'AUDIO MUTED' : 'SPATIAL STEREO ACTIVE'}
            </span>
          </div>

          <div className="absolute bottom-8 right-8 text-right font-mono text-[11px] text-neutral-400">
            <span>DIRECTED WITH {currentScene.tools[0]} &amp; RESOLVE 19</span>
          </div>
        </div>
      </main>

      {/* Bottom Timeline Controls */}
      <footer className="px-6 md:px-12 py-5 border-t border-neutral-800 bg-black/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Playback buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setCurrentProjectIndex((prev) => (prev > 0 ? prev - 1 : reelScenes.length - 1))}
            className="p-2 text-neutral-400 hover:text-white"
            title="Previous scene"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 rounded-full bg-[#d4af37] text-black flex items-center justify-center font-bold hover:scale-105 transition-transform"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>

          <button
            onClick={() => setCurrentProjectIndex((prev) => (prev + 1) % reelScenes.length)}
            className="p-2 text-neutral-400 hover:text-white"
            title="Next scene"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 text-neutral-400 hover:text-white ml-2"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>

        {/* Global Reel Timeline Scrubber */}
        <div className="flex-1 max-w-xl mx-4 flex items-center gap-3 text-xs font-mono text-neutral-400">
          <span>0{currentProjectIndex + 1}</span>
          <div className="flex-1 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#d4af37] transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span>0{reelScenes.length}</span>
        </div>

        <div className="text-xs font-mono text-neutral-500">
          PRESS <kbd className="px-1.5 py-0.5 bg-neutral-800 text-neutral-300 rounded text-[10px]">SPACE</kbd> TO TOGGLE
        </div>
      </footer>
    </div>
  );
};
