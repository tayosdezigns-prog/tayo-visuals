import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Eye, Award, Cpu, Video, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { theme } = useTheme();

  const capabilities = [
    {
      icon: Cpu,
      title: 'Neural Prompt Rigging',
      desc: 'Authoring intricate multi-model prompt chains with geometric camera parameters, seed control, and strict artifact suppression.'
    },
    {
      icon: Compass,
      title: 'Cinematic Direction',
      desc: 'Translating brand guidelines into anamorphic lens choices, lighting setups (chiaroscuro, high-key, neon rim), and intentional framing.'
    },
    {
      icon: Video,
      title: 'Precision Editorial',
      desc: 'Cutting with musical rhythm in DaVinci Resolve Studio 19. Speed ramping, frame-level cleanups, and optical motion flow.'
    },
    {
      icon: Sparkles,
      title: 'Commercial Color & Audio',
      desc: 'Print-stock film emulation (Kodak 2383 / 5207) combined with multi-stem spatial sound design for physical resonance.'
    }
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 w-full max-w-[1440px] mx-auto border-t border-neutral-700/20">
      {/* Editorial Artistic Manifesto */}
      <div className="max-w-5xl mb-24">
        <div className="text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37] mb-6 flex items-center gap-2">
          <Eye className="w-3.5 h-3.5" />
          <span>DIRECTOR'S STATEMENT</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] mb-8">
          Ideas start <br />
          <span className="text-neutral-400 font-serif-cinzel font-normal italic">as words.</span> <br />
          <span className="text-[#d4af37]">I turn them into visuals.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-neutral-700/30">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
              THE CONVERGENCE
            </span>
            <div className="text-sm font-semibold tracking-wider uppercase text-[#d4af37] space-y-1">
              <div>AI CREATIVITY</div>
              <div>+ CINEMATIC STORYTELLING</div>
              <div>+ VIDEO EDITING</div>
              <div>+ VISUAL DIRECTION</div>
              <div>+ COMMERCIAL CREATIVITY</div>
            </div>
          </div>

          <div className="md:col-span-8 space-y-6 text-base sm:text-lg font-light leading-relaxed">
            <p className={theme === 'dark' ? 'text-neutral-200' : 'text-neutral-800'}>
              The democratization of generative AI has created an endless ocean of meaningless 3-second clips.
              Most AI video looks synthetic not because of the technology, but because of a lack of directorial discipline.
            </p>
            <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>
              I operate at the intersection of commercial film direction and generative neural architecture. Every project begins with a clear commercial thesis, precise lighting geometry, and an editor’s sense of temporal pacing. The result is visual work that commands attention and feels like a real high-end production.
            </p>
          </div>
        </div>
      </div>

      {/* Production Architecture Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        {capabilities.map((cap) => {
          const Icon = cap.icon;
          return (
            <div
              key={cap.title}
              className={`p-6 rounded-md border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-neutral-900/30 border-white/10 hover:border-[#d4af37]/60'
                  : 'bg-neutral-100/70 border-neutral-300/80 hover:border-[#b8860b]/60'
              }`}
            >
              <Icon className="w-6 h-6 text-[#d4af37] mb-4" />
              <h3 className="font-display font-bold text-lg uppercase tracking-tight mb-2">
                {cap.title}
              </h3>
              <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}`}>
                {cap.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Production Standards (Constitutional Claim-to-Proof Adjacency) */}
      <div className="mt-16 p-8 rounded-lg border border-neutral-700/30 bg-neutral-900/20 backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="font-display font-black text-3xl sm:text-4xl text-[#d4af37] tracking-tight">4K DCI</div>
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mt-1">Master Resolution</div>
        </div>
        <div>
          <div className="font-display font-black text-3xl sm:text-4xl text-[#d4af37] tracking-tight">24 FPS</div>
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mt-1">Cinematic Frame Rate</div>
        </div>
        <div>
          <div className="font-display font-black text-3xl sm:text-4xl text-[#d4af37] tracking-tight">100%</div>
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mt-1">Directed Generation</div>
        </div>
        <div>
          <div className="font-display font-black text-3xl sm:text-4xl text-[#d4af37] tracking-tight">8–12d</div>
          <div className="text-xs font-mono tracking-widest text-neutral-400 uppercase mt-1">Average Campaign Sprint</div>
        </div>
      </div>
    </section>
  );
};
