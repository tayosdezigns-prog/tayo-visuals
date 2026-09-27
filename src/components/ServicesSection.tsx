import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/projects';
import { useTheme } from '../context/ThemeContext';
import { ArrowUpRight, Check, Layers } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { theme } = useTheme();
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section id="services" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-16 w-full max-w-[1440px] mx-auto border-t border-neutral-700/20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-neutral-700/20">
        <div>
          <div className="text-xs font-mono tracking-[0.3em] uppercase text-[#d4af37] mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" />
            <span>COMMERCIAL CAPABILITIES</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase leading-none">
            Production <br />
            <span className="text-[#d4af37] font-serif-cinzel font-normal italic">Services</span> &amp; Disciplines
          </h2>
        </div>

        <p className="text-xs md:text-sm font-mono text-neutral-400 max-w-sm uppercase">
          [INTERACTIVE DIRECTORY — HOVER TO PREVIEW CAMPAIGN DELIVERABLES AND RECENT SPECULATIVE STILLS]
        </p>
      </div>

      {/* Interactive Editorial Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Editorial Interactive Service List */}
        <div className="lg:col-span-7 divide-y divide-neutral-700/30">
          {SERVICES_DATA.map((service) => {
            const isActive = service.id === activeServiceId;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onClick={() => onSelectService && onSelectService(service.title)}
                className={`py-6 md:py-8 transition-all duration-300 cursor-pointer group ${
                  isActive ? 'opacity-100 pl-2' : 'opacity-65 hover:opacity-100 hover:pl-2'
                }`}
                data-cursor="view"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4 sm:gap-6">
                    <span
                      className={`text-xs font-mono tracking-widest transition-colors ${
                        isActive ? 'text-[#d4af37] font-bold' : 'text-neutral-500'
                      }`}
                    >
                      {service.id}
                    </span>
                    <h3
                      className={`font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight transition-all duration-300 ${
                        isActive
                          ? theme === 'dark'
                            ? 'text-white translate-x-2'
                            : 'text-neutral-950 translate-x-2'
                          : theme === 'dark'
                          ? 'text-neutral-400 group-hover:text-white'
                          : 'text-neutral-600 group-hover:text-black'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                      isActive ? 'text-[#d4af37] translate-x-1 -translate-y-1' : 'text-neutral-600'
                    }`}
                  />
                </div>

                {/* Subtitle kicker visible on active or mobile */}
                <div
                  className={`mt-2 ml-8 sm:ml-10 text-xs font-mono transition-colors ${
                    isActive ? 'text-[#d4af37]' : 'text-neutral-500'
                  }`}
                >
                  {service.subtitle}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Sticky Dynamic Visual & Deliverables Inspector */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md bg-neutral-950 border border-neutral-800 shadow-2xl">
            <img
              key={activeService.image}
              src={activeService.image}
              alt={activeService.title}
              className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-[0.88]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-white/80">
              <span className="text-[#d4af37]">SERVICE {activeService.id} // CAMPAIGN STILL</span>
              <span>4K PRORES</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs font-mono uppercase text-neutral-400">BENCHMARK EXECUTION</div>
              <div className="font-display font-extrabold text-xl text-white uppercase">{activeService.title}</div>
            </div>
          </div>

          {/* Service Description and Deliverables List */}
          <div
            className={`p-6 rounded-md border transition-all ${
              theme === 'dark'
                ? 'bg-neutral-900/40 border-neutral-800'
                : 'bg-neutral-100/80 border-neutral-300'
            }`}
          >
            <p className={`text-sm leading-relaxed mb-6 ${theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {activeService.description}
            </p>

            <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block mb-3 font-semibold">
              CORE PRODUCTION DELIVERABLES
            </span>

            <ul className="space-y-2.5 text-xs font-mono">
              {activeService.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2 text-neutral-400">
                  <Check className="w-3.5 h-3.5 text-[#d4af37] mt-0.5 shrink-0" />
                  <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
