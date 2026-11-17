import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-burgundy-950 text-neutral-300 pt-12 pb-10 border-t border-burgundy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Footer Navigation Columns (3 balanced columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-xs">
          
          {/* Brand Info */}
          <div className="space-y-3">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] text-white font-black uppercase block">
                VELOUR
              </span>
              <span className="text-[10px] tracking-[0.25em] text-champagne-300 font-bold uppercase block">
                Fragancias Originales
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed font-normal max-w-sm">
              Especialistas en perfumería árabe, fragancias de diseñador, splash y spray 100% auténticos. Atención personalizada y productos garantizados.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-champagne-300 font-bold">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantía de Originalidad 100%</span>
            </div>
          </div>

          {/* Links: Categorías */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Líneas de Perfumería
            </h4>
            <ul className="space-y-2 text-neutral-300 font-medium">
              <li><a href="#catalogo" className="hover:text-champagne-300 transition-colors">Perfumes Árabes (670+)</a></li>
              <li><a href="#catalogo" className="hover:text-champagne-300 transition-colors">Perfumes Diseñador (830+)</a></li>
              <li><a href="#catalogo" className="hover:text-champagne-300 transition-colors">Colección Splash (119+)</a></li>
              <li><a href="#catalogo" className="hover:text-champagne-300 transition-colors">Colección Spray & Ambientadores (45)</a></li>
              <li><a href="#catalogo" className="hover:text-champagne-300 transition-colors">Fragancias para Dama</a></li>
              <li><a href="#catalogo" className="hover:text-champagne-300 transition-colors">Fragancias para Caballero</a></li>
            </ul>
          </div>

          {/* Customer Service / Concierge */}
          <div className="space-y-2">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Atención & Pedidos
            </h4>
            <p className="text-neutral-300 leading-relaxed font-normal max-w-xs">
              Atención directa por WhatsApp de lunes a sábado de 9:00 a 19:00 hrs.
            </p>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-burgundy-900/80 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4 font-medium">
          <p>
            &copy; 2026 Velour. Fragancias Originales. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#catalogo" className="hover:text-neutral-200 transition-colors">Términos del Servicio</a>
            <a href="#catalogo" className="hover:text-neutral-200 transition-colors">Términos de Compra</a>
            <a href="#catalogo" className="hover:text-neutral-200 transition-colors">Garantía de Autenticidad</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
