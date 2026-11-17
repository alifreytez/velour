import React, { useState } from 'react';
import { Sparkles, Clock, Wind, Droplets } from 'lucide-react';

export const OlfactoryPyramidExplainer = () => {
  const [activeLayer, setActiveLayer] = useState('corazon');

  const layers = {
    salida: {
      title: "Notas de Salida (Tête)",
      time: "Primeros 15 a 30 minutos",
      role: "El primer saludo olfativo",
      description: "Son las moléculas más volátiles y ligeras. Despiertan el olfato con energía inmediata: cítricos efervescentes, frutas jugosas, hierbas frescas y especias frías.",
      examples: ["Bergamota de Calabria", "Pimienta Rosa", "Azafrán Persa", "Mandarina Verde"],
      icon: Wind
    },
    corazon: {
      title: "Notas de Corazón (Cœur)",
      time: "2 a 6 horas",
      role: "La verdadera identidad y personalidad",
      description: "El alma que define la familia de la fragancia. Aparece una vez que la salida se atenúa, revelando opulentas flores de Grasse, acordes especiados, maderas sutiles y resinas aromáticas.",
      examples: ["Rosa de Grasse", "Jazmín Sambac", "Oud de Camboya", "Lirio Florentino"],
      icon: Droplets
    },
    fondo: {
      title: "Notas de Fondo (Fond)",
      time: "8 a 16+ horas",
      role: "La memoria indeleble y la fijación",
      description: "Compuestas por las moléculas más pesadas y ricas. Otorgan profundidad, fijación y calidez duradera a la piel durante todo el día y la noche.",
      examples: ["Ámbar Gris", "Sándalo de Mysore", "Vainilla Bourbon", "Cuero Ruso"],
      icon: Clock
    }
  };

  const current = layers[activeLayer];
  const IconComponent = current.icon;

  return (
    <section id="piramides" className="py-20 bg-burgundy-950 text-silk-100 border-t border-burgundy-800 relative overflow-hidden">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-champagne-400/40 bg-burgundy-900/50 text-champagne-300 text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-champagne-400" />
            <span>Guía de Alta Perfumería</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-silk-100 font-light">
            El Secreto de la Pirámide Olfativa
          </h2>
          <p className="text-xs sm:text-sm text-silk-300 font-light leading-relaxed">
            Una fragancia viva no es estática: respira, muta y evoluciona en tres tiempos maestros sobre tu piel.
          </p>
        </div>

        {/* Interactive Pyramid Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Pyramid Controls */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Top Layer Button */}
            <div
              onClick={() => setActiveLayer('salida')}
              className={`cursor-pointer p-5 rounded-lg border transition-all duration-300 ${
                activeLayer === 'salida'
                  ? 'bg-burgundy-900 border-champagne-400 shadow-luxury scale-[1.02]'
                  : 'bg-burgundy-900/40 border-burgundy-800/80 hover:bg-burgundy-900/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-medium text-silk-100">1. Notas de Salida</span>
                <span className="text-xs text-champagne-300 font-mono">15 - 30 min</span>
              </div>
              <p className="text-xs text-silk-400 mt-1 font-light">
                Frescura instantánea, bienvenida y primeros destellos al vaporizar.
              </p>
            </div>

            {/* Heart Layer Button */}
            <div
              onClick={() => setActiveLayer('corazon')}
              className={`cursor-pointer p-5 rounded-lg border transition-all duration-300 ${
                activeLayer === 'corazon'
                  ? 'bg-burgundy-900 border-champagne-400 shadow-luxury scale-[1.02]'
                  : 'bg-burgundy-900/40 border-burgundy-800/80 hover:bg-burgundy-900/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-medium text-silk-100">2. Notas de Corazón</span>
                <span className="text-xs text-champagne-300 font-mono">2 - 6 horas</span>
              </div>
              <p className="text-xs text-silk-400 mt-1 font-light">
                El carácter distintivo del perfume: flores carnales, especias cálidas y acordes centrales.
              </p>
            </div>

            {/* Base Layer Button */}
            <div
              onClick={() => setActiveLayer('fondo')}
              className={`cursor-pointer p-5 rounded-lg border transition-all duration-300 ${
                activeLayer === 'fondo'
                  ? 'bg-burgundy-900 border-champagne-400 shadow-luxury scale-[1.02]'
                  : 'bg-burgundy-900/40 border-burgundy-800/80 hover:bg-burgundy-900/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg font-medium text-silk-100">3. Notas de Fondo</span>
                <span className="text-xs text-champagne-300 font-mono">8 - 16+ horas</span>
              </div>
              <p className="text-xs text-silk-400 mt-1 font-light">
                Maderas preciosas, resinas, ámbar y almizcles que se funden con tu química corporal.
              </p>
            </div>

          </div>

          {/* Active Detail Display Box */}
          <div className="lg:col-span-6">
            <div className="bg-burgundy-900/80 border border-champagne-400/40 rounded-xl p-8 shadow-2xl space-y-6 relative">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-champagne-500/20 border border-champagne-400/60 flex items-center justify-center text-champagne-300">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-silk-100 font-light">
                    {current.title}
                  </h3>
                  <span className="text-xs text-champagne-300 uppercase tracking-wider font-mono">
                    Duración activa: {current.time}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-silk-400 font-semibold block">
                  Rol en la creación
                </span>
                <p className="font-serif text-lg text-silk-200 font-normal italic">
                  "{current.role}"
                </p>
                <p className="text-xs text-silk-300 font-light leading-relaxed pt-1">
                  {current.description}
                </p>
              </div>

              {/* Examples in our perfumes */}
              <div className="pt-4 border-t border-burgundy-800 space-y-2">
                <span className="text-xs uppercase tracking-widest text-champagne-300 font-semibold block">
                  Ingredientes Maestros Emblemáticos:
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.examples.map((ex, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-burgundy-950/80 border border-champagne-400/30 text-silk-200 text-xs rounded-full"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
