import React from 'react';
import { useCatalog } from '../context/CatalogContext';
import {
  X,
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  MessageCircle
} from 'lucide-react';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    generateWhatsAppMessage
  } = useCatalog();

  if (!isCartOpen) return null;

  const handleCheckoutWhatsApp = () => {
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end animate-fadeIn">
      
      {/* Backdrop */}
      <div className="flex-1" onClick={() => setIsCartOpen(false)} />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white shadow-2xl border-l border-neutral-300 flex flex-col h-full text-neutral-900">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-200 bg-neutral-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-burgundy-900" />
            <h2 className="font-serif text-xl text-neutral-900 font-bold uppercase tracking-wider">
              Bolsa de Pedidos
            </h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 rounded-full hover:bg-neutral-200 text-neutral-800 transition-colors"
            aria-label="Cerrar bolsa"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                <ShoppingBag className="w-8 h-8 text-neutral-400" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-lg text-neutral-900 font-bold">
                  Tu bolsa está vacía
                </h3>
                <p className="text-xs text-neutral-700 font-medium max-w-xs">
                  Explora los perfumes árabes y de diseñador y añade tus preferidos.
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-burgundy-900 text-white text-xs font-bold uppercase tracking-wider rounded hover:bg-burgundy-950 transition-colors shadow-sm"
              >
                Ver Catálogo
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {cart.map(item => (
                <div
                  key={item.itemKey}
                  className="flex gap-3 p-3 bg-neutral-50 rounded-lg border border-neutral-200 items-center shadow-xs"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain rounded bg-white border border-neutral-200 flex-shrink-0 p-1"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div className="truncate">
                        <span className="text-[10px] text-burgundy-900 font-extrabold uppercase tracking-wider block">
                          {item.brand}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-neutral-900 truncate" title={item.name}>
                          {item.name}
                        </h4>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.itemKey)}
                        className="text-neutral-400 hover:text-red-700 transition-colors p-1 flex-shrink-0"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex justify-between items-center pt-2">
                      <span className="text-xs font-bold text-neutral-700">
                        {item.volume} · ${item.price} c/u
                      </span>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-neutral-300 rounded bg-white text-xs">
                          <button
                            onClick={() => updateQuantity(item.itemKey, -1)}
                            className="px-2 py-0.5 text-neutral-700 hover:text-burgundy-900"
                            aria-label="Disminuir"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-bold text-xs text-neutral-950">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.itemKey, 1)}
                            className="px-2 py-0.5 text-neutral-700 hover:text-burgundy-900"
                            aria-label="Aumentar"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-serif font-black text-burgundy-950 text-base">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-neutral-200 bg-neutral-50 space-y-4">
            
            <div className="space-y-2 text-xs text-neutral-800 font-semibold">
              <div className="flex justify-between text-base font-bold text-neutral-950">
                <span className="font-serif text-lg">Total del Pedido</span>
                <span className="font-serif text-2xl font-black text-burgundy-950">
                  ${cartSubtotal} USD
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar Pedido por WhatsApp</span>
            </button>

            <p className="text-[11px] text-center text-neutral-600 font-medium">
              Se enviará la lista con nombres, códigos y cantidades a nuestro asesor de ventas.
            </p>

          </div>
        )}

      </div>

    </div>
  );
};
