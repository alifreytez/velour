import React from 'react';
import { REVIEWS_SHOWCASE } from '../data/perfumes';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const CustomerReviewsSection = () => {
  return (
    <section className="py-20 bg-white border-t border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
          <span className="text-xs uppercase tracking-widest text-burgundy-900 font-extrabold">
            Opiniones de Clientes
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-bold">
            Experiencias Verificadas
          </h2>
          <p className="text-sm text-neutral-700 font-medium">
            Comentarios reales de compradores de perfumería árabe y de diseñador.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_SHOWCASE.map((rev, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 p-6 rounded-lg border border-neutral-300 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                
                {/* Rating & Quote Icon */}
                <div className="flex justify-between items-center">
                  <div className="flex text-champagne-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-champagne-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-burgundy-900/30" />
                </div>

                <p className="text-xs sm:text-sm text-neutral-800 font-normal leading-relaxed italic">
                  "{rev.comment}"
                </p>

              </div>

              {/* Reviewer info */}
              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs">
                <div>
                  <div className="flex items-center gap-1">
                    <strong className="text-neutral-950 font-bold">{rev.name}</strong>
                    <span className="text-neutral-600 font-medium">({rev.city})</span>
                  </div>
                  <span className="text-[11px] text-burgundy-900 font-bold block">
                    Fragancia: {rev.perfume}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-800 font-bold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Compra Verificada</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
