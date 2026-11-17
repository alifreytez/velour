import React from 'react';
import { BRAND_VALUES } from '../data/perfumes';
import { Award, Gift, Sparkles, MessageCircle } from 'lucide-react';

export const BrandValuesBanner = () => {
  const icons = [Award, Gift, Sparkles, MessageCircle];

  return (
    <section id="experiencia" className="py-16 bg-neutral-100 border-t border-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRAND_VALUES.map((val, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={val.title}
                className="bg-white p-6 rounded-lg border border-neutral-300 hover:border-burgundy-900 transition-all duration-300 hover:shadow-md space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-burgundy-900 text-champagne-300 flex items-center justify-center shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-neutral-900">
                    {val.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-burgundy-900 font-bold block">
                    {val.subtitle}
                  </span>
                </div>
                <p className="text-xs text-neutral-700 font-medium leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
