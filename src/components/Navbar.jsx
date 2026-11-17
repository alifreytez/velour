import React, { useState } from 'react';
import { useCatalog } from '../context/CatalogContext';
import {
  ShoppingBag,
  Search,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

export const Navbar = () => {
  const {
    cartCount,
    setIsCartOpen,
    searchQuery,
    setSearchQuery,
    setSelectedCategory
  } = useCatalog();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const scrollToCatalog = (cat = 'Todas') => {
    setIsMobileMenuOpen(false);
    setSelectedCategory(cat);
    const element = document.getElementById('catalogo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGuarantees = () => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById('experiencia');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-burgundy-900/95 backdrop-blur-md border-b border-burgundy-800 text-silk-200 transition-all shadow-luxury">
      
      {/* Top Announcement Bar */}
      <div className="bg-burgundy-950 text-champagne-300 text-[10px] sm:text-xs py-1.5 px-3 text-center tracking-wider sm:tracking-widest uppercase border-b border-burgundy-900/60 font-semibold overflow-hidden">
        <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 max-w-full">
          <Sparkles className="w-3 h-3 text-champagne-400 flex-shrink-0" />
          <span className="truncate sm:hidden">Velour · Fragancias Originales · Perfumería Garantizada</span>
          <span className="hidden sm:inline">Velour · Fragancias Originales · Perfumería Árabe, Diseñador, Splash & Spray · 100% Auténticos</span>
          <Sparkles className="w-3 h-3 text-champagne-400 flex-shrink-0" />
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 sm:p-2 text-silk-200 hover:text-champagne-300 focus:outline-none transition-colors rounded-md"
              aria-label="Menú"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>

          {/* Logo & Brand Name */}
          <div
            className="flex items-center gap-2 sm:gap-3 cursor-pointer min-w-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-champagne-400/50 shadow-sm bg-burgundy-950 flex-shrink-0 group">
              <img
                src="/logo.jpeg"
                alt="Velour Logo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-lg sm:text-2xl tracking-[0.16em] sm:tracking-[0.25em] text-white font-bold uppercase leading-tight truncate">
                VELOUR
              </span>
              <span className="text-[8px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.3em] text-champagne-300 uppercase font-semibold truncate">
                Fragancias Originales
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-xs font-bold tracking-wider uppercase text-neutral-100">
            <button
              onClick={() => scrollToCatalog('Todas')}
              className="hover:text-champagne-300 transition-colors py-2 border-b-2 border-transparent hover:border-champagne-400"
            >
              Todo el Catálogo
            </button>
            <button
              onClick={() => scrollToGuarantees()}
              className="hover:text-champagne-300 transition-colors py-2 border-b-2 border-transparent hover:border-champagne-400"
            >
              Garantía de Autenticidad
            </button>
          </div>

          {/* Action Icons: Search & Cart */}
          <div className="flex items-center space-x-1 sm:space-x-3 flex-shrink-0">
            
            {/* Search Toggle */}
            <button
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              className="p-1.5 sm:p-2 text-silk-200 hover:text-champagne-300 transition-colors rounded-full hover:bg-burgundy-800"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Bag */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3.5 sm:py-2 bg-champagne-500 hover:bg-champagne-400 text-burgundy-950 font-bold rounded-full text-xs tracking-wider transition-all duration-300 shadow-gold-glow flex-shrink-0"
              aria-label="Bolsa de compras"
            >
              <ShoppingBag className="w-4 h-4 text-burgundy-950 flex-shrink-0" />
              <span className="uppercase font-bold hidden sm:inline">Bolsa</span>
              {cartCount > 0 && (
                <span className="min-w-4 h-4 sm:w-5 sm:h-5 bg-burgundy-900 text-white text-[10px] sm:text-xs rounded-full flex items-center justify-center font-black px-1">
                  {cartCount}
                </span>
              )}
            </button>

          </div>
        </div>

        {/* Collapsible Search */}
        {isSearchVisible && (
          <div className="pb-4 pt-1 px-2 transition-all">
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Buscar perfume, splash, marca (Lattafa, Perry Ellis) o código..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-burgundy-950/90 border border-champagne-400/50 rounded-full py-2.5 pl-11 pr-10 text-xs text-white placeholder-silk-300 focus:outline-none focus:ring-1 focus:ring-champagne-400 font-medium"
              />
              <Search className="w-4 h-4 text-champagne-400 absolute left-4 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-silk-400 hover:text-white text-xs"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-burgundy-950 border-t border-burgundy-800 px-6 py-6 space-y-4 text-xs font-bold tracking-wider uppercase">
          <button
            onClick={() => scrollToCatalog('Todas')}
            className="block w-full text-left py-2 text-white hover:text-champagne-300 border-b border-burgundy-900"
          >
            Todo el Catálogo (1,672)
          </button>
          <button
            onClick={() => scrollToCatalog('Perfumería Árabe')}
            className="block w-full text-left py-2 text-white hover:text-champagne-300 border-b border-burgundy-900"
          >
            Perfumes Árabes (674)
          </button>
          <button
            onClick={() => scrollToCatalog('Perfumería Diseñador')}
            className="block w-full text-left py-2 text-white hover:text-champagne-300 border-b border-burgundy-900"
          >
            Perfumes Diseñador (834)
          </button>
          <button
            onClick={() => scrollToCatalog('Splash')}
            className="block w-full text-left py-2 text-white hover:text-champagne-300 border-b border-burgundy-900"
          >
            Línea Splash & Body Mists (119)
          </button>
          <button
            onClick={() => scrollToCatalog('Spray')}
            className="block w-full text-left py-2 text-white hover:text-champagne-300 border-b border-burgundy-900"
          >
            Línea Spray & Ambientadores (45)
          </button>
          <button
            onClick={scrollToGuarantees}
            className="block w-full text-left py-2 text-white hover:text-champagne-300 border-b border-burgundy-900"
          >
            Garantía de Autenticidad
          </button>
        </div>
      )}
    </header>
  );
};
