import React, { useState } from 'react';
import { useCatalog } from '../context/CatalogContext';
import { PERFUMES_DATA } from '../data/perfumes';
import {
  X,
  Compass,
  RotateCcw,
  ShoppingBag,
  Eye
} from 'lucide-react';

export const FragranceQuizModal = () => {
  const { isQuizOpen, setIsQuizOpen, addToCart, setQuickViewPerfume } = useCatalog();

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    world: '', // 'arabe' | 'disenador'
    occasion: '',
    gender: ''
  });
  const [recommendedPerfume, setRecommendedPerfume] = useState(null);

  if (!isQuizOpen) return null;

  const handleClose = () => {
    setIsQuizOpen(false);
    setTimeout(() => {
      setStep(1);
      setAnswers({ world: '', occasion: '', gender: '' });
      setRecommendedPerfume(null);
    }, 300);
  };

  const handleSelectOption = (key, value) => {
    const nextAnswers = { ...answers, [key]: value };
    setAnswers(nextAnswers);

    if (step < 3) {
      setStep(step + 1);
    } else {
      calculateRecommendation(nextAnswers);
    }
  };

  const calculateRecommendation = (finalAnswers) => {
    const targetCat = finalAnswers.world === 'arabe' ? 'Perfumería Árabe' : 'Perfumería Diseñador';
    const targetGender = finalAnswers.gender === 'dama' ? 'Dama' : (finalAnswers.gender === 'caballero' ? 'Caballero' : 'Unisex');

    const pool = PERFUMES_DATA.filter(p =>
      p.category === targetCat && (p.gender === targetGender || p.gender === 'Unisex')
    );

    // Pick a bestseller from pool or first item
    const bestsellers = pool.filter(p => p.isBestseller);
    const chosen = bestsellers.length > 0 ? bestsellers[0] : (pool.length > 0 ? pool[0] : PERFUMES_DATA[0]);

    setRecommendedPerfume(chosen);
    setStep(4);
  };

  const handleRetake = () => {
    setStep(1);
    setAnswers({ world: '', occasion: '', gender: '' });
    setRecommendedPerfume(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-burgundy-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-silk-50 border border-champagne-400/40 rounded-lg shadow-2xl p-6 sm:p-8 text-silk-900 my-8">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-silk-500 hover:text-silk-900 transition-colors"
          aria-label="Cerrar test"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-burgundy-100 text-burgundy-900 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Asesor Virtual</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-light text-burgundy-950">
            Descubre tu Fragancia Ideal
          </h2>
          <p className="text-xs text-silk-600 max-w-md mx-auto">
            Encuentra la joya aromática perfecta entre perfumería árabe y de diseñador.
          </p>

          {/* Dots */}
          {step <= 3 && (
            <div className="flex justify-center items-center gap-2 pt-3">
              {[1, 2, 3].map(dot => (
                <div
                  key={dot}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step === dot
                      ? 'w-8 bg-burgundy-900'
                      : step > dot
                      ? 'w-4 bg-champagne-500'
                      : 'w-4 bg-silk-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Step 1: World (Árabe vs Diseñador) */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-center text-silk-800">
              Paso 1: ¿Qué estilo de perfumería buscas hoy?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                onClick={() => handleSelectOption('world', 'arabe')}
                className="p-5 rounded-md border border-silk-300 hover:border-burgundy-900 bg-silk-100 hover:bg-silk-200 text-left transition-all group"
              >
                <span className="block font-serif text-base font-bold text-burgundy-950 group-hover:text-burgundy-900 mb-1">
                  Perfumería Árabe
                </span>
                <span className="block text-xs text-silk-600 font-light leading-relaxed">
                  Lattafa, Armaf, Afnan, Al Haramain. Alta proyección, acordes exóticos de oud, vainilla, ámbar y especias.
                </span>
              </button>

              <button
                onClick={() => handleSelectOption('world', 'disenador')}
                className="p-5 rounded-md border border-silk-300 hover:border-burgundy-900 bg-silk-100 hover:bg-silk-200 text-left transition-all group"
              >
                <span className="block font-serif text-base font-bold text-burgundy-950 group-hover:text-burgundy-900 mb-1">
                  Perfumería Diseñador
                </span>
                <span className="block text-xs text-silk-600 font-light leading-relaxed">
                  Carolina Herrera, Paco Rabanne, Versace, Jean Paul Gaultier. Fragancias clásicas de prestigio internacional.
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Gender */}
        {step === 2 && (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-center text-silk-800">
              Paso 2: ¿Para quién es el perfume?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {[
                { id: 'dama', label: 'Dama', desc: 'Flores, frutas, dulzura y sensualidad' },
                { id: 'caballero', label: 'Caballero', desc: 'Maderas, frescura, especias y cuero' },
                { id: 'unisex', label: 'Unisex', desc: 'Versátil, magnético y adaptable' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption('gender', opt.id)}
                  className="p-4 rounded-md border border-silk-300 hover:border-burgundy-900 bg-silk-100 hover:bg-silk-200 text-center transition-all group"
                >
                  <span className="block font-semibold text-sm text-burgundy-950 group-hover:text-burgundy-900 mb-1">
                    {opt.label}
                  </span>
                  <span className="block text-[11px] text-silk-600 font-light">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Occasion */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-center text-silk-800">
              Paso 3: ¿En qué momentos planeas usarlo?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { id: 'noche', label: 'Noches & Citas Especiales', desc: 'Aroma envolvente y duradero' },
                { id: 'diario', label: 'Día a Día & Trabajo', desc: 'Elegancia limpia y no invasiva' },
                { id: 'fiesta', label: 'Fiestas & Celebraciones', desc: 'Llamar la atención con estela potente' },
                { id: 'verano', label: 'Clima Cálido & Salidas', desc: 'Frescura cítrica y chispeante' }
              ].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption('occasion', opt.id)}
                  className="p-4 rounded-md border border-silk-300 hover:border-burgundy-900 bg-silk-100 hover:bg-silk-200 text-left transition-all group"
                >
                  <span className="block font-semibold text-xs text-burgundy-950 group-hover:text-burgundy-900 mb-1">
                    {opt.label}
                  </span>
                  <span className="block text-[11px] text-silk-600 font-light">
                    {opt.desc}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 4 && recommendedPerfume && (
          <div className="space-y-6 pt-2 animate-fadeIn">
            <div className="bg-silk-100 border border-champagne-400/50 rounded-lg p-5 flex flex-col sm:flex-row gap-5 items-center">
              <img
                src={recommendedPerfume.image}
                alt={recommendedPerfume.name}
                className="w-28 h-28 object-contain rounded bg-silk-50 border border-silk-200 p-2 flex-shrink-0"
              />

              <div className="space-y-1.5 text-center sm:text-left flex-1 min-w-0">
                <span className="px-2 py-0.5 bg-burgundy-900 text-silk-100 text-[10px] uppercase font-bold tracking-wider rounded">
                  {recommendedPerfume.category}
                </span>

                <div className="text-xs uppercase tracking-wider text-burgundy-900 font-semibold">
                  {recommendedPerfume.brand}
                </div>

                <h4 className="font-serif text-2xl font-normal text-burgundy-950 truncate">
                  {recommendedPerfume.name}
                </h4>

                <p className="text-xs text-silk-600 font-light">
                  {recommendedPerfume.volume} · {recommendedPerfume.gender} · {recommendedPerfume.concentration}
                </p>

                <div className="pt-2 font-serif text-xl font-bold text-burgundy-900">
                  ${recommendedPerfume.price_detal} USD
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  addToCart(recommendedPerfume, 1);
                  handleClose();
                }}
                className="flex-1 py-3 bg-burgundy-900 hover:bg-burgundy-950 text-silk-100 rounded text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-champagne-300" />
                <span>Agregar a la Bolsa</span>
              </button>

              <button
                onClick={() => {
                  handleClose();
                  setQuickViewPerfume(recommendedPerfume);
                }}
                className="py-3 px-5 border border-silk-400 hover:bg-silk-200 rounded text-xs font-semibold uppercase tracking-wider text-silk-800 transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-4 h-4" />
                <span>Ver Ficha Completa</span>
              </button>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={handleRetake}
                className="inline-flex items-center gap-1 text-xs text-silk-500 hover:text-burgundy-900 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Volver a realizar el test</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
