import React, { useState } from 'react';
import { useCatalog } from '../context/CatalogContext';
import { Heart, Eye, ShoppingBag, Images } from 'lucide-react';

export const PerfumeCard = ({ perfume }) => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewPerfume
  } = useCatalog();

  const [imageError, setImageError] = useState(false);
  const isFavorite = isInWishlist(perfume.id);

  return (
    <div className="group relative bg-white border border-neutral-200 hover:border-burgundy-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
      
      {/* Top Media Container */}
      <div
        className="relative aspect-square bg-neutral-50 overflow-hidden cursor-pointer flex items-center justify-center p-3 border-b border-neutral-100"
        onClick={() => setQuickViewPerfume(perfume)}
      >
        {/* Perfume Image with Fallback */}
        <img
          src={imageError ? 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80' : perfume.image}
          alt={`${perfume.brand} ${perfume.name}`}
          onError={() => setImageError(true)}
          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges on Image */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
          <span className={`px-2 py-0.5 text-[9px] uppercase font-extrabold tracking-wider rounded shadow-xs ${
            perfume.category === 'Perfumería Árabe'
              ? 'bg-burgundy-900 text-white'
              : perfume.category === 'Splash'
              ? 'bg-emerald-800 text-white'
              : perfume.category === 'Spray'
              ? 'bg-amber-800 text-white'
              : 'bg-neutral-900 text-white'
          }`}>
            {perfume.category === 'Perfumería Árabe'
              ? 'Árabe'
              : perfume.category === 'Splash'
              ? 'Splash'
              : perfume.category === 'Spray'
              ? 'Spray'
              : 'Diseñador'}
          </span>
          {perfume.isBestseller && (
            <span className="px-2 py-0.5 bg-champagne-500 text-burgundy-950 text-[9px] uppercase font-extrabold tracking-wider rounded shadow-xs">
              Bestseller
            </span>
          )}
        </div>

        {/* Photos indicator if multiple */}
        {perfume.images && perfume.images.length > 1 && (
          <div className="absolute bottom-2.5 left-2.5 z-10 px-2 py-0.5 bg-neutral-900/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold rounded flex items-center gap-1 shadow-xs">
            <Images className="w-3 h-3" />
            <span>{perfume.images.length}</span>
          </div>
        )}

        {/* Favorite & Quick View Buttons */}
        <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(perfume.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-all ${
              isFavorite
                ? 'bg-burgundy-900 text-white shadow-md'
                : 'bg-white/95 hover:bg-white text-neutral-700 hover:text-burgundy-900 shadow-sm border border-neutral-200'
            }`}
            aria-label="Favorito"
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current text-champagne-400' : ''}`} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewPerfume(perfume);
            }}
            className="p-2 rounded-full bg-white/95 hover:bg-white text-neutral-700 hover:text-burgundy-900 shadow-sm border border-neutral-200 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Vista rápida"
          >
            <Eye className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
        
        <div className="space-y-1.5">
          {/* Brand & Gender */}
          <div className="flex items-center justify-between text-xs tracking-wider">
            <span className="font-extrabold text-burgundy-950 uppercase truncate max-w-[65%] text-[11px]">
              {perfume.brand}
            </span>
            <span className="px-2 py-0.5 bg-neutral-100 text-neutral-800 font-bold rounded border border-neutral-200 text-[10px] uppercase">
              {perfume.gender}
            </span>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => setQuickViewPerfume(perfume)}
            className="font-serif text-lg font-bold text-neutral-900 hover:text-burgundy-900 transition-colors cursor-pointer leading-tight line-clamp-1"
            title={perfume.name}
          >
            {perfume.name}
          </h3>

          {/* Volume and Concentration */}
          <p className="text-xs text-neutral-700 font-medium truncate">
            {perfume.volume} · {perfume.concentration}
          </p>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="pt-3 border-t border-neutral-200 space-y-2.5">
          
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline">
              <span className="font-serif text-2xl font-black text-burgundy-950">
                ${perfume.price}
              </span>
              <span className="text-xs text-neutral-700 font-bold uppercase ml-1.5">
                USD
              </span>
            </div>
            {perfume.barcode && (
              <span className="text-[10px] text-neutral-500 font-mono">
                {perfume.barcode}
              </span>
            )}
          </div>

          {/* Add to Cart button */}
          <button
            onClick={() => addToCart(perfume, 1)}
            className="w-full py-2.5 bg-burgundy-900 hover:bg-burgundy-950 text-white rounded text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-champagne-300" />
            <span>Añadir a la Bolsa</span>
          </button>

        </div>

      </div>

    </div>
  );
};
