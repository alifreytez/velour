import React from 'react';
import { useCatalog } from '../context/CatalogContext';
import { Sparkles, ArrowRight, Compass, ShieldCheck, Award } from 'lucide-react';

export const Hero = () => {
  const { setSelectedCategory, setIsQuizOpen } = useCatalog();

  const scrollToCatalogWithCategory = (cat) => {
    setSelectedCategory(cat);
    const el = document.getElementById('catalogo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-burgundy-900 text-white pt-10 sm:pt-16 pb-0 lg:py-20 border-b border-burgundy-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-burgundy-800/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-champagne-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand statement & Category CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne-400/50 bg-burgundy-950/80 text-champagne-300 text-xs tracking-widest uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
              <span>Velour · Fragancias Originales</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.15] text-white font-light">
              La más exclusiva colección de <br />
              <span className="font-normal italic text-champagne-300 font-serif">perfumes árabes, diseñador y splash</span>
            </h1>

            <p className="text-neutral-100 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Explora más de 1,500 fragancias 100% originales garantizadas en <strong className="text-white font-bold">Velour</strong>. Desde la opulencia oriental de Lattafa, Armaf y Afnan, hasta los clásicos legendarios de Carolina Herrera, Paco Rabanne y Jean Paul Gaultier.
            </p>

            {/* Quick Category Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => scrollToCatalogWithCategory('Perfumería Árabe')}
                className="w-full sm:w-auto px-6 py-3.5 bg-champagne-500 hover:bg-champagne-400 text-burgundy-950 font-bold tracking-wider text-xs uppercase rounded shadow-gold-glow transition-all flex items-center justify-center gap-2 group"
              >
                <span>Perfumería Árabe</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollToCatalogWithCategory('Perfumería Diseñador')}
                className="w-full sm:w-auto px-6 py-3.5 bg-burgundy-950 hover:bg-burgundy-800 border border-champagne-400/60 text-white font-bold tracking-wider text-xs uppercase rounded transition-all flex items-center justify-center gap-2"
              >
                <span>Perfumería Diseñador</span>
                <ArrowRight className="w-4 h-4 text-champagne-300" />
              </button>

              <button
                onClick={() => setIsQuizOpen(true)}
                className="w-full sm:w-auto px-4 py-3.5 text-champagne-300 hover:text-white text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <Compass className="w-4 h-4 text-champagne-400" />
                <span>Test de Fragancia</span>
              </button>
            </div>

            {/* Metrics */}
            <div className="pt-6 border-t border-burgundy-800/80 grid grid-cols-3 gap-4 text-center sm:text-left">
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-champagne-300 font-bold">670+</p>
                <p className="text-xs text-neutral-100 uppercase tracking-wider font-bold mt-1">Perfumes Árabes</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-champagne-300 font-bold">830+</p>
                <p className="text-xs text-neutral-100 uppercase tracking-wider font-bold mt-1">Diseñador Original</p>
              </div>
              <div>
                <p className="font-serif text-3xl sm:text-4xl text-champagne-300 font-bold">100%</p>
                <p className="text-xs text-neutral-100 uppercase tracking-wider font-bold mt-1">Sellados & Genuinos</p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Monogram Card */}
          <div className="lg:col-span-5 -mx-4 sm:-mx-6 lg:mx-0 w-auto lg:w-full mt-6 sm:mt-10 lg:mt-0">
            <div className="relative w-full">
              <div className="hidden lg:block absolute -inset-1 rounded-2xl bg-gradient-to-tr from-champagne-400/40 via-burgundy-700/50 to-champagne-500/30 blur-sm" />

              <div className="relative rounded-none lg:rounded-2xl bg-burgundy-950 border-t border-burgundy-800 lg:border lg:border-champagne-400/40 p-6 sm:p-8 md:p-10 shadow-none lg:shadow-2xl overflow-hidden">
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row lg:flex-col items-center gap-6 sm:gap-8 lg:gap-6 text-center sm:text-left lg:text-center">
                  
                  {/* Circular Monogram Emblem */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-36 lg:h-36 rounded-full border-2 border-champagne-400/60 overflow-hidden shadow-2xl bg-burgundy-900 flex-shrink-0 group">
                    <img
                      src="/logo.jpeg"
                      alt="Velour Emblema"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-burgundy-950/15 mix-blend-multiply" />
                  </div>

                  {/* Brand Statement Content */}
                  <div className="space-y-2 flex-1">
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-3xl font-bold text-white tracking-wide uppercase">
                      Velour
                    </h2>
                    <span className="text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase text-champagne-400 font-bold block">
                      Fragancias Originales
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-200 font-normal leading-relaxed max-w-2xl lg:max-w-xs pt-1">
                      Fotografías en alta definición, disponibilidad inmediata y empaque protector original en cada orden.
                    </p>
                  </div>

                </div>

                {/* Badges Row */}
                <div className="max-w-4xl mx-auto mt-6 pt-5 flex flex-wrap items-center justify-center sm:justify-between lg:justify-center gap-4 text-xs tracking-wider text-neutral-200 border-t border-burgundy-900/80 font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0" />
                    <span>Empaque Seguro</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0" />
                    <span>Garantía Total</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-400 flex-shrink-0" />
                    <span>100% Genuinos</span>
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
