import React from 'react';
import { CatalogProvider, useCatalog } from './context/CatalogContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CatalogFilters } from './components/CatalogFilters';
import { PerfumeCard } from './components/PerfumeCard';
import { PerfumeDetailModal } from './components/PerfumeDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { FragranceQuizModal } from './components/FragranceQuizModal';
import { BrandValuesBanner } from './components/BrandValuesBanner';
import { Footer } from './components/Footer';
import { RotateCcw, ChevronDown } from 'lucide-react';

const CatalogContent = () => {
  const {
    filteredPerfumes,
    displayedPerfumes,
    resetFilters,
    visibleCount,
    loadMore,
    hasMore
  } = useCatalog();

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero />

        {/* Catalog Section */}
        <section id="catalogo" className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header with High Contrast Typography */}
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-semibold tracking-tight">
                Catálogo de Perfumería
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 font-medium leading-relaxed">
                Selección completa de Perfumería Árabe, Diseñador, Splash y Spray. Fragancias 100% originales garantizadas.
              </p>
            </div>

            {/* Filter Bar */}
            <CatalogFilters />

            {/* Products Grid */}
            {filteredPerfumes.length === 0 ? (
              <div className="py-16 text-center space-y-4 bg-white rounded-lg border border-neutral-300 p-8 my-8 shadow-sm">
                <h3 className="font-serif text-2xl text-neutral-900 font-semibold">
                  No se encontraron perfumes con estos criterios
                </h3>
                <p className="text-sm text-neutral-700 font-medium max-w-md mx-auto">
                  Prueba cambiando la marca, ampliando el rango de precio o buscando con un término diferente.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-burgundy-900 text-white text-xs font-semibold uppercase tracking-wider rounded hover:bg-burgundy-950 transition-colors shadow-sm"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Restablecer Filtros</span>
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                  {displayedPerfumes.map(perfume => (
                    <PerfumeCard key={perfume.id} perfume={perfume} />
                  ))}
                </div>

                {/* Pagination / Load More */}
                <div className="pt-12 pb-6 text-center space-y-3">
                  <p className="text-sm text-neutral-800 font-semibold">
                    Mostrando <strong className="text-burgundy-900 font-bold">{displayedPerfumes.length}</strong> de <strong className="text-burgundy-900 font-bold">{filteredPerfumes.length}</strong> fragancias disponibles
                  </p>

                  {hasMore && (
                    <button
                      onClick={loadMore}
                      className="px-8 py-3.5 bg-burgundy-900 hover:bg-burgundy-950 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <span>Cargar Más Fragancias (+24)</span>
                      <ChevronDown className="w-4 h-4 text-champagne-300" />
                    </button>
                  )}
                </div>
              </>
            )}

          </div>
        </section>

        {/* Brand Values & Guarantees */}
        <BrandValuesBanner />

      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <PerfumeDetailModal />
      <CartDrawer />
      <WishlistDrawer />
      <FragranceQuizModal />

    </div>
  );
};

export function App() {
  return (
    <CatalogProvider>
      <CatalogContent />
    </CatalogProvider>
  );
}

export default App;
