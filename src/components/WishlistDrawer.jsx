import React from 'react';
import { useCatalog } from '../context/CatalogContext';
import { PERFUMES_DATA } from '../data/perfumes';
import {
  X,
  Heart,
  ShoppingBag,
  Trash2,
  Eye,
  ArrowRight
} from 'lucide-react';

export const WishlistDrawer = () => {
  const {
    isWishlistOpen,
    setIsWishlistOpen,
    wishlist,
    toggleWishlist,
    addToCart,
    setQuickViewPerfume
  } = useCatalog();

  if (!isWishlistOpen) return null;

  const savedPerfumes = PERFUMES_DATA.filter(p => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-burgundy-950/70 backdrop-blur-sm flex justify-end animate-fadeIn">
      
      {/* Backdrop */}
      <div className="flex-1" onClick={() => setIsWishlistOpen(false)} />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-silk-50 shadow-2xl border-l border-champagne-400/40 flex flex-col h-full text-silk-900">
        
        {/* Header */}
        <div className="p-5 border-b border-silk-300 bg-silk-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-burgundy-900 fill-current" />
            <h2 className="font-serif text-xl text-burgundy-950 font-semibold uppercase tracking-wider">
              Favoritos ({savedPerfumes.length})
            </h2>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1.5 rounded-full hover:bg-silk-200 text-silk-700 transition-colors"
            aria-label="Cerrar favoritos"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {savedPerfumes.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-silk-200 flex items-center justify-center text-silk-400">
                <Heart className="w-8 h-8 text-burgundy-800/40" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-silk-900 font-medium">
                  Aún no has guardado fragancias
                </h3>
                <p className="text-xs text-silk-600 max-w-xs">
                  Haz clic en el corazón de cualquier perfume para guardarlo en tu lista privada.
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {savedPerfumes.map(perfume => (
                <div
                  key={perfume.id}
                  className="flex gap-4 p-3 bg-silk-100 rounded-md border border-silk-200"
                >
                  <img
                    src={perfume.image}
                    alt={perfume.name}
                    className="w-16 h-20 object-cover rounded bg-silk-200 flex-shrink-0 cursor-pointer"
                    onClick={() => {
                      setIsWishlistOpen(false);
                      setQuickViewPerfume(perfume);
                    }}
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4
                          onClick={() => {
                            setIsWishlistOpen(false);
                            setQuickViewPerfume(perfume);
                          }}
                          className="font-serif text-sm font-semibold text-silk-900 cursor-pointer hover:text-burgundy-900"
                        >
                          {perfume.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(perfume.id)}
                          className="text-silk-400 hover:text-red-700 transition-colors p-1"
                          aria-label="Quitar de favoritos"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-silk-600 font-light">
                        {perfume.concentration} · {perfume.volume || '100 ml'}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2">
                      <button
                        onClick={() => {
                          addToCart(perfume, perfume.sizes[0], 1);
                          setIsWishlistOpen(false);
                        }}
                        className="flex-1 py-1.5 bg-burgundy-900 hover:bg-burgundy-950 text-silk-100 text-[11px] font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Añadir ({perfume.sizes[0].size})</span>
                      </button>

                      <button
                        onClick={() => {
                          setIsWishlistOpen(false);
                          setQuickViewPerfume(perfume);
                        }}
                        className="p-1.5 border border-silk-300 hover:bg-silk-200 rounded text-silk-700"
                        aria-label="Ver detalles"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
