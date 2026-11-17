import React, { useState, useEffect } from 'react';
import { useCatalog } from '../context/CatalogContext';
import {
  X,
  Heart,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Barcode,
  Plus,
  Minus
} from 'lucide-react';

export const PerfumeDetailModal = () => {
  const {
    quickViewPerfume,
    setQuickViewPerfume,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useCatalog();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setSelectedImageIndex(0);
    setQuantity(1);
  }, [quickViewPerfume]);

  if (!quickViewPerfume) return null;

  const isFavorite = isInWishlist(quickViewPerfume.id);
  const unitPrice = quickViewPerfume.price_detal > 0 ? quickViewPerfume.price_detal : (quickViewPerfume.price || 45);

  const handleAddToCart = () => {
    addToCart(quickViewPerfume, quantity);
    setQuickViewPerfume(null);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hola Velour (Fragancias Originales). Estoy interesado en el perfume "${quickViewPerfume.brand} - ${quickViewPerfume.name}" (${quickViewPerfume.volume}). Código: ${quickViewPerfume.barcode || 'N/A'}. Precio: $${unitPrice} USD c/u (Cantidad: ${quantity}). ¿Tienen disponibilidad inmediata?`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Dialog Box */}
      <div className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl border border-neutral-300 overflow-hidden text-neutral-900 my-8">
        
        {/* Close Button */}
        <button
          onClick={() => setQuickViewPerfume(null)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors shadow-sm"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Gallery */}
          <div className="md:col-span-5 bg-neutral-100 p-6 flex flex-col justify-between items-center relative border-r border-neutral-200">
            
            {/* Main Featured Image */}
            <div className="w-full aspect-square relative flex items-center justify-center bg-white rounded-lg border border-neutral-200 p-4 overflow-hidden shadow-inner">
              <img
                src={quickViewPerfume.images[selectedImageIndex] || quickViewPerfume.image}
                alt={`${quickViewPerfume.brand} ${quickViewPerfume.name}`}
                className="w-full h-full object-contain object-center"
              />
            </div>

            {/* Gallery Thumbnails */}
            {quickViewPerfume.images && quickViewPerfume.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-1">
                {quickViewPerfume.images.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`w-14 h-14 rounded-md border p-1 bg-white flex-shrink-0 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-burgundy-900 ring-2 ring-burgundy-900/40 shadow-sm'
                        : 'border-neutral-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt="miniatura" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}

            {/* Favorite toggle */}
            <button
              onClick={() => toggleWishlist(quickViewPerfume.id)}
              className={`absolute top-4 left-4 p-2.5 rounded-full shadow-md transition-colors ${
                isFavorite
                  ? 'bg-burgundy-900 text-white'
                  : 'bg-white text-neutral-700 hover:text-burgundy-900 border border-neutral-200'
              }`}
              aria-label="Favorito"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current text-champagne-400' : ''}`} />
            </button>

          </div>

          {/* Right Column: Info & Actions */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {/* Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs uppercase tracking-wider">
                <span className="font-extrabold text-burgundy-900 text-sm">{quickViewPerfume.brand}</span>
                <span className="px-2.5 py-0.5 bg-neutral-100 border border-neutral-300 rounded font-bold text-neutral-800 text-[11px]">
                  {quickViewPerfume.category}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
                {quickViewPerfume.name}
              </h2>

              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-800 pt-1">
                <span className="bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
                  Volumen: <strong className="text-neutral-950 font-bold">{quickViewPerfume.volume}</strong>
                </span>
                <span className="bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
                  Género: <strong className="text-neutral-950 font-bold">{quickViewPerfume.gender}</strong>
                </span>
                <span className="bg-neutral-100 px-2.5 py-1 rounded border border-neutral-200">
                  Concentración: <strong className="text-neutral-950 font-bold">{quickViewPerfume.concentration}</strong>
                </span>
              </div>

              {quickViewPerfume.barcode && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 border border-neutral-300 text-neutral-800 rounded text-xs font-mono font-bold mt-2">
                  <Barcode className="w-4 h-4 text-neutral-700" />
                  <span>Código de Barra: {quickViewPerfume.barcode}</span>
                </div>
              )}
            </div>

            {/* Price Box */}
            <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-bold text-neutral-600 block">
                  Precio por Unidad
                </span>
                <span className="font-serif text-3xl font-black text-burgundy-950">
                  ${unitPrice}
                </span>
                <span className="text-xs text-neutral-700 font-bold ml-1">USD</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block">
                  Disponibilidad Inmediata
                </span>
              </div>
            </div>

            {/* Total and Quantity */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center border border-neutral-300 rounded-md bg-white h-11 px-2 shadow-xs">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-neutral-700 hover:text-burgundy-900"
                  aria-label="Restar unidad"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 font-bold text-sm text-neutral-950">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-neutral-700 hover:text-burgundy-900"
                  aria-label="Sumar unidad"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="text-right">
                <span className="text-xs text-neutral-700 uppercase font-bold tracking-wider block">Total a Pagar</span>
                <span className="font-serif text-3xl font-black text-burgundy-950">
                  ${unitPrice * quantity}
                </span>
                <span className="text-xs text-neutral-700 font-bold ml-1">USD</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 h-12 bg-burgundy-900 hover:bg-burgundy-950 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <ShoppingBag className="w-4 h-4 text-champagne-300" />
                <span>Agregar a la Bolsa</span>
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="h-12 px-5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Pedir por WhatsApp</span>
              </button>
            </div>

            {/* Guarantee */}
            <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-800 font-semibold">
              <span className="inline-flex items-center gap-1.5 text-emerald-800 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                100% Original Sellado de Fábrica
              </span>
              <span>Garantía de Autenticidad</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
