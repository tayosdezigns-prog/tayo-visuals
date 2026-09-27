import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import noireImg from '../assets/images/noire_perfume_campaign_1790418011423.jpg';

interface ContactSectionProps {
  initialOpen?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const { theme } = useTheme();
  const [projectType, setProjectType] = useState<string>('AI Commercial & Product Ad');
  const [timeline, setTimeline] = useState<string>('2–3 Weeks');
  const [budget, setBudget] = useState<string>('$5,000 — $10,000');
  const [email, setEmail] = useState<string>('');
  const [briefText, setBriefText] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const projectTypes = [
    'AI Commercial & Product Ad',
    'Cinematic Brand Film',
    'AI Product Visualization',
    'High-Velocity Social / UGC',
    'Experimental / Film Festival'
  ];

  const timelines = ['Rush (7–10 Days)', 'Standard (2–3 Weeks)', 'Enterprise (1+ Month)'];
  const budgets = ['$3,000 — $5,000', '$5,000 — $10,000', '$10,000 — $25,000', '$25,000+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative min-h-screen py-28 md:py-36 px-6 md:px-12 lg:px-16 flex flex-col justify-between overflow-hidden">
      {/* Background cinematic media with deep contrast scrim */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={noireImg}
          alt="Contact background mood"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.15]"
          referrerPolicy="no-referrer"
        />
        <div
          className={`absolute inset-0 ${
            theme === 'dark' ? 'bg-[#08080a]/85' : 'bg-[#f7f6f2]/88'
          }`}
        />
        <div className={theme === 'dark' ? 'film-grain absolute inset-0' : 'film-grain-light absolute inset-0'} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37] mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>COMMISSION A PRODUCTION</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.95] mb-6">
            Have an idea <br />
            <span className="font-serif-cinzel font-normal italic text-neutral-400">worth seeing?</span> <br />
            <span className="text-[#d4af37]">Let's turn it into a visual.</span>
          </h2>

          <p className="text-sm md:text-base font-light text-neutral-300 max-w-2xl mx-auto">
            Currently accepting select commercial commissions, product visualization campaigns, and speculative brand collaborations.
          </p>
        </div>

        {/* Interactive Production Inquiry Deck */}
        <div
          className={`max-w-3xl mx-auto p-8 sm:p-12 rounded-xl border backdrop-blur-xl transition-all ${
            theme === 'dark'
              ? 'bg-neutral-950/70 border-white/10 shadow-2xl'
              : 'bg-white/80 border-neutral-300 shadow-2xl'
          }`}
        >
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] text-[#d4af37] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-3xl uppercase tracking-tight">
                INQUIRY TRANSMITTED
              </h3>
              <p className="text-sm text-neutral-400 max-w-md mx-auto">
                Thank you. Your concept brief has been registered. You will receive a tailored director's treatment overview and scheduling estimate within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 px-6 py-2 text-xs font-mono uppercase tracking-widest text-[#d4af37] border border-[#d4af37]/40 rounded hover:bg-[#d4af37]/10"
              >
                SUBMIT ANOTHER BRIEF
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Project Scope */}
              <div className="space-y-3">
                <label className="block text-xs font-mono tracking-widest uppercase text-neutral-400">
                  01 // SELECT CAMPAIGN DISCIPLINE
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className={`px-3.5 py-2 text-xs font-mono tracking-wider uppercase rounded border transition-all ${
                        projectType === type
                          ? 'bg-[#d4af37] text-neutral-950 font-bold border-[#d4af37]'
                          : 'border-neutral-700/60 bg-neutral-900/30 text-neutral-300 hover:border-neutral-500'
                      }`}
                      data-cursor="pointer"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Target Timeline & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-xs font-mono tracking-widest uppercase text-neutral-400">
                    02 // TARGET TIMELINE
                  </label>
                  <div className="flex flex-col gap-2">
                    {timelines.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setTimeline(time)}
                        className={`px-3 py-2 text-xs font-mono text-left tracking-wider uppercase rounded border transition-all ${
                          timeline === time
                            ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] font-semibold'
                            : 'border-neutral-700/60 bg-neutral-900/30 text-neutral-300 hover:border-neutral-500'
                        }`}
                        data-cursor="pointer"
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-mono tracking-widest uppercase text-neutral-400">
                    03 // PRODUCTION BUDGET RANGE
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`p-2 text-xs font-mono text-center tracking-wider uppercase rounded border transition-all ${
                          budget === b
                            ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] font-semibold'
                            : 'border-neutral-700/60 bg-neutral-900/30 text-neutral-300 hover:border-neutral-500'
                        }`}
                        data-cursor="pointer"
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 3: Brief Details & Email */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
                    04 // PROJECT VISION / CONCEPT NOTES
                  </label>
                  <textarea
                    rows={3}
                    value={briefText}
                    onChange={(e) => setBriefText(e.target.value)}
                    placeholder="Briefly describe your brand, product, or visual goals..."
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-md text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono tracking-widest uppercase text-neutral-400 mb-2">
                    05 // YOUR CONTACT EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="director@agency.com"
                    className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700 rounded-md text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 bg-[#d4af37] text-neutral-950 hover:bg-white font-display font-extrabold text-sm tracking-widest uppercase rounded transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl"
                data-cursor="go"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
