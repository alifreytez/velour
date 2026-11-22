import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { PERFUMES_DATA } from '../data/perfumes';

const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
  // Cart items: [{ itemKey, perfumeId, name, brand, volume, price, quantity, image, category, barcode }]
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('velour_cart') || localStorage.getItem('le_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Wishlist: array of perfume ids
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('velour_wishlist') || localStorage.getItem('le_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // UI Modals & Drawers
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quickViewPerfume, setQuickViewPerfume] = useState(null);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedBrand, setSelectedBrand] = useState('Todas');
  const [selectedGender, setSelectedGender] = useState('Todos');
  const [selectedConcentration, setSelectedConcentration] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('destacados');
  const [visibleCount, setVisibleCount] = useState(24);

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('velour_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('velour_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Reset pagination when any filter changes
  useEffect(() => {
    setVisibleCount(24);
  }, [selectedCategory, selectedBrand, selectedGender, selectedConcentration, searchQuery, sortBy]);

  // Cart operations
  const addToCart = (perfume, quantity = 1) => {
    const unitPrice = perfume.price_detal > 0 ? perfume.price_detal : (perfume.price || 45);

    setCart(prev => {
      const itemKey = `${perfume.id}-${perfume.volume}`;
      const existing = prev.find(item => item.itemKey === itemKey);
      if (existing) {
        return prev.map(item =>
          item.itemKey === itemKey
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          itemKey,
          perfumeId: perfume.id,
          name: perfume.name,
          brand: perfume.brand,
          volume: perfume.volume,
          category: perfume.category,
          barcode: perfume.barcode || '',
          price: unitPrice,
          quantity,
          image: perfume.image,
          concentration: perfume.concentration
        }
      ];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemKey) => {
    setCart(prev => prev.filter(item => item.itemKey !== itemKey));
  };

  const updateQuantity = (itemKey, delta) => {
    setCart(prev =>
      prev
        .map(item => {
          if (item.itemKey === itemKey) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Wishlist operations
  const toggleWishlist = (perfumeId) => {
    setWishlist(prev =>
      prev.includes(perfumeId)
        ? prev.filter(id => id !== perfumeId)
        : [...prev, perfumeId]
    );
  };

  const isInWishlist = (perfumeId) => wishlist.includes(perfumeId);

  // Cart totals
  const cartSubtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Filtered & Sorted perfumes (memoized)
  const filteredPerfumes = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return PERFUMES_DATA.filter(p => {
      if (selectedCategory !== 'Todas' && p.category !== selectedCategory) {
        return false;
      }

      if (selectedBrand !== 'Todas' && p.brand !== selectedBrand) {
        return false;
      }

      if (selectedGender !== 'Todos' && p.gender !== selectedGender) {
        return false;
      }

      if (selectedConcentration !== 'Todas' && p.concentration !== selectedConcentration) {
        return false;
      }

      if (q) {
        const matchName = p.name.toLowerCase().includes(q);
        const matchBrand = p.brand.toLowerCase().includes(q);
        const matchDesc = (p.description || '').toLowerCase().includes(q);
        const matchBarcode = (p.barcode || '').includes(q);
        if (!matchName && !matchBrand && !matchDesc && !matchBarcode) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'nombre-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'nombre-desc') return b.name.localeCompare(a.name);
      
      if (a.isBestseller && !b.isBestseller) return -1;
      if (!a.isBestseller && b.isBestseller) return 1;
      return 0;
    });
  }, [
    selectedCategory,
    selectedBrand,
    selectedGender,
    selectedConcentration,
    searchQuery,
    sortBy
  ]);

  // Paginated perfumes
  const displayedPerfumes = useMemo(() => {
    return filteredPerfumes.slice(0, visibleCount);
  }, [filteredPerfumes, visibleCount]);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 24, filteredPerfumes.length));
  };

  const resetFilters = () => {
    setSelectedCategory('Todas');
    setSelectedBrand('Todas');
    setSelectedGender('Todos');
    setSelectedConcentration('Todas');
    setSearchQuery('');
    setSortBy('destacados');
    setVisibleCount(24);
  };

  const activeFiltersCount =
    (selectedCategory !== 'Todas' ? 1 : 0) +
    (selectedBrand !== 'Todas' ? 1 : 0) +
    (selectedGender !== 'Todos' ? 1 : 0) +
    (selectedConcentration !== 'Todas' ? 1 : 0) +
    (searchQuery.trim() !== '' ? 1 : 0);

  // Generate WhatsApp order message with Velour branding
  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return '';
    let msg = `Hola Velour (Fragancias Originales). Deseo solicitar información y disponibilidad para el siguiente pedido del catálogo:%0A%0A`;
    cart.forEach(item => {
      msg += `* ${item.brand} - ${item.name} (${item.volume}) x${item.quantity}%0A`;
      if (item.barcode) msg += `  Código: ${item.barcode}%0A`;
      msg += `%0A`;
    });
    msg += `*Total de Fragancias:* ${cartCount} unidad${cartCount !== 1 ? 'es' : ''}%0A%0A`;
    msg += `Por favor, confírmenme disponibilidad para coordinar la compra. Muchas gracias.`;
    return msg;
  };

  return (
    <CatalogContext.Provider
      value={{
        cart,
        cartCount,
        cartSubtotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isQuizOpen,
        setIsQuizOpen,
        quickViewPerfume,
        setQuickViewPerfume,
        selectedCategory,
        setSelectedCategory,
        selectedBrand,
        setSelectedBrand,
        selectedGender,
        setSelectedGender,
        selectedConcentration,
        setSelectedConcentration,
        searchQuery,
        setSearchQuery,
        sortBy,
        setSortBy,
        resetFilters,
        activeFiltersCount,
        filteredPerfumes,
        displayedPerfumes,
        visibleCount,
        loadMore,
        hasMore: visibleCount < filteredPerfumes.length,
        generateWhatsAppMessage
      }}
    >
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalog = () => {
  const context = useContext(CatalogContext);
  if (!context) {
    throw new Error('useCatalog must be used within a CatalogProvider');
  }
  return context;
};
