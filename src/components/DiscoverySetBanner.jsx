import React from 'react';
import { useCatalog } from '../context/CatalogContext';
import { Sparkles, Gift, ArrowRight, ShieldCheck } from 'lucide-react';

export const DiscoverySetBanner = () => {
  const { addToCart } = useCatalog();

  const discoverySetProduct = {
    id: 'coffret-decouverte',
    name: "Coffret Découverte Lè Parfums",
    subtitle: "Set de 5 Miniaturas de 10ml con Vaporizador",
    family: "Colección Completa",
    gender: "Unisex",
    concentration: "Extrait & Eau de Parfum",
    price: 95,
    sizes: [{ size: "5 x 10 ml", price: 95 }],
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=900&q=80"
  };

  const handleAddSet = () => {
    addToCart(discoverySetProduct, discoverySetProduct.sizes[0], 1);
  };

  return (
    <section className="py-16 bg-burgundy-900 text-silk-100 border-y border-burgundy-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-burgundy-950/90 border border-champagne-400/40 rounded-2xl p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual */}
          <div className="lg:col-span-5 relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-lg border border-champagne-400/30">
            <img
              src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=900&q=80"
              alt="Coffret Découverte Lè Parfums"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <span className="px-3 py-1 bg-burgundy-900 text-champagne-300 text-xs font-semibold uppercase tracking-wider rounded-sm">
                Edición de Prueba
              </span>
              <span className="font-serif text-2xl font-bold text-silk-100">
                $95 USD
              </span>
            </div>
          </div>

          {/* Right Column: Copy & Offer */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-burgundy-900 border border-champagne-400/40 rounded-full text-champagne-300 text-xs font-medium uppercase tracking-widest">
              <Gift className="w-3.5 h-3.5 text-champagne-400" />
              <span>Experiencia en Casa</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-silk-100 font-light leading-tight">
              ¿Indeciso? Prueba el <br />
              <span className="italic font-normal text-champagne-300">Coffret Découverte</span>
            </h3>

            <p className="text-xs sm:text-sm text-silk-300 font-light leading-relaxed max-w-xl">
              Recibe nuestras 5 creaciones más galardonadas en viales de 10ml con atomizador de lujo. Experimenta la evolución de cada pirámide olfativa sobre tu propia piel durante 30 días.
            </p>

            <div className="p-4 bg-burgundy-900/60 rounded-md border border-burgundy-800 text-xs text-silk-200 space-y-1">
              <strong className="text-champagne-300 uppercase tracking-wider block font-semibold">
                Garantía 100% Canjeable
              </strong>
              <p className="text-silk-300 font-light">
                Los $95 USD del set se convierten en un cupón íntegro de crédito para tu primera compra de un frasco de 100ml.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleAddSet}
                className="px-8 py-3.5 bg-champagne-500 hover:bg-champagne-400 text-burgundy-950 font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <span>Añadir Coffret a la Bolsa ($95 USD)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
