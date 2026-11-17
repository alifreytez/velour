import React from 'react';
import { Sparkles, Award, ShieldCheck, Droplets } from 'lucide-react';

export const BrandStorySection = () => {
  return (
    <section id="maison" className="py-20 bg-silk-100 text-silk-900 border-t border-silk-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Monogram & Artistry */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative bg-burgundy-900 rounded-2xl p-8 sm:p-10 shadow-2xl border border-champagne-400/40 text-center text-silk-100 overflow-hidden">
                
                {/* Background ambient pattern */}
                <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

                {/* Monogram image */}
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-2 border-champagne-400/60 shadow-2xl bg-burgundy-950 mb-6 group">
                  <img
                    src="/logo.jpeg"
                    alt="Monograma Lè Parfums"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <span className="text-[11px] tracking-[0.3em] uppercase text-champagne-300 font-medium block mb-2">
                  La Identidad Visual
                </span>
                
                <h3 className="font-serif text-2xl font-normal text-silk-100 mb-3">
                  El Monograma Lè
                </h3>

                <p className="text-xs text-silk-300 font-light leading-relaxed">
                  Nuestra firma une la pureza de las letras clásicas con la silueta de una gota viva de esencia pura en suspensión, representando la fusión entre la caligrafía clásica y la alquimia del perfume.
                </p>

                <div className="pt-6 mt-6 border-t border-burgundy-800 text-[11px] text-champagne-300 uppercase tracking-widest flex items-center justify-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Alta Perfumería Artesanal</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-burgundy-100 text-burgundy-900 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Droplets className="w-3.5 h-3.5" />
              <span>Nuestra Historia</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-burgundy-950 font-light leading-tight">
              Donde la devoción botánica se convierte en arte
            </h2>

            <p className="text-sm sm:text-base text-silk-700 font-light leading-relaxed">
              En <strong className="text-burgundy-900 font-medium">Lè Parfums</strong> rechazamos la producción industrial acelerada. Creemos que una fragancia extraordinaria es una obra viva que requiere cosechas éticas, tiempo de maceración inalterable y concentración sin concesiones.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              
              <div className="space-y-2 border-l-2 border-burgundy-900 pl-4">
                <span className="font-serif text-xl font-bold text-burgundy-900 block">01. Grasse</span>
                <p className="text-xs text-silk-600 font-light leading-relaxed">
                  Extracción de flores cultivadas en los microclimas sagrados del sur de Francia y productores de origen certificado.
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-burgundy-900 pl-4">
                <span className="font-serif text-xl font-bold text-burgundy-900 block">02. 180 Días</span>
                <p className="text-xs text-silk-600 font-light leading-relaxed">
                  Maceración prolongada a temperatura controlada en penumbra para que cada acorde se funda en armonía absoluta.
                </p>
              </div>

              <div className="space-y-2 border-l-2 border-burgundy-900 pl-4">
                <span className="font-serif text-xl font-bold text-burgundy-900 block">03. Cristal Pesado</span>
                <p className="text-xs text-silk-600 font-light leading-relaxed">
                  Frascos tallados en vidrio denso, con tapones magnéticos y atomizadores de micro-bruma suave como seda.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
