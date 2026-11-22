import React, { useState, useMemo } from 'react';
import { useCatalog } from '../context/CatalogContext';
import { CATEGORIES, GENDERS, CONCENTRATIONS, ALL_BRANDS } from '../data/perfumes';
import {
  SlidersHorizontal,
  RotateCcw,
  Search,
  ChevronDown
} from 'lucide-react';

export const CatalogFilters = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    selectedGender,
    setSelectedGender,
    selectedConcentration,
    setSelectedConcentration,
    sortBy,
    setSortBy,
    searchQuery,
    setSearchQuery,
    resetFilters,
    activeFiltersCount,
    filteredPerfumes
  } = useCatalog();

  const [showAdvanced, setShowAdvanced] = useState(false);

  // Available brands for current category
  const availableBrands = useMemo(() => {
    return ['Todas', ...(ALL_BRANDS[selectedCategory] || ALL_BRANDS['Todas'])];
  }, [selectedCategory]);

  return (
    <div className="bg-white border border-neutral-300 rounded-lg p-5 sm:p-6 mb-8 shadow-sm space-y-5">
      
      {/* Row 1: Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-neutral-200 pb-5">
        {CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedBrand('Todas');
              }}
              className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-bold transition-all duration-200 flex-shrink-0 flex items-center gap-2 ${
                isActive
                  ? 'bg-burgundy-900 text-white shadow-md border border-burgundy-900'
                  : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              <span>{cat}</span>
              {cat === 'Perfumería Árabe' && (
                <span className="px-2 py-0.5 bg-champagne-400 text-burgundy-950 text-[10px] font-extrabold rounded-full">
                  Árabe
                </span>
              )}
              {cat === 'Perfumería Diseñador' && (
                <span className="px-2 py-0.5 bg-neutral-800 text-white text-[10px] font-extrabold rounded-full">
                  Original
                </span>
              )}
              {cat === 'Splash' && (
                <span className="px-2 py-0.5 bg-emerald-800 text-white text-[10px] font-extrabold rounded-full">
                  Splash
                </span>
              )}
              {cat === 'Spray' && (
                <span className="px-2 py-0.5 bg-amber-800 text-white text-[10px] font-extrabold rounded-full">
                  Spray
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Row 2: Search Bar, Brand Selector & Filters Trigger */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        
        {/* Search bar */}
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Buscar perfume, splash, spray, marca (Lattafa, Carolina Herrera) o código..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-300 rounded-md py-2.5 pl-10 pr-4 text-xs font-medium text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-burgundy-900 focus:bg-white"
          />
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>

        {/* Brand Selector */}
        <div className="w-full sm:w-64 relative">
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="w-full bg-neutral-50 border border-neutral-300 rounded-md py-2.5 pl-3 pr-8 text-xs font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-burgundy-900 appearance-none cursor-pointer"
          >
            <option value="Todas">Todas las Marcas ({availableBrands.length - 1})</option>
            {availableBrands.filter(b => b !== 'Todas').map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
          <ChevronDown className="w-4 h-4 text-neutral-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* Filters Toggle & Reset Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className={`flex-1 sm:flex-none px-4 py-2.5 rounded-md border text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5 ${
              showAdvanced || activeFiltersCount > 0
                ? 'bg-burgundy-900 text-white border-burgundy-900'
                : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border-neutral-300'
            }`}
            title="Más filtros"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filtros</span>
            {activeFiltersCount > 0 && (
              <span className="ml-1 px-1.5 py-0.2 bg-champagne-400 text-burgundy-950 rounded-full text-[10px] font-black">
                {activeFiltersCount}
              </span>
            )}
          </button>

          {activeFiltersCount > 0 && (
            <button
              onClick={resetFilters}
              className="p-2.5 rounded-md border border-neutral-300 text-xs font-bold text-burgundy-900 hover:bg-neutral-100 transition-colors"
              title="Limpiar filtros"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

      {/* Row 3: Gender Filter Pills + Counter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-neutral-200">
        
        {/* Gender Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs uppercase tracking-wider text-neutral-900 font-bold mr-1">
            Público:
          </span>
          {GENDERS.map(g => {
            const isSelected = selectedGender === g;
            return (
              <button
                key={g}
                onClick={() => setSelectedGender(g)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs ${
                  isSelected
                    ? 'bg-burgundy-900 text-white border border-burgundy-900'
                    : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-300'
                }`}
              >
                {g}
              </button>
            );
          })}
        </div>

        {/* Results Summary */}
        <div className="text-xs font-medium text-neutral-700">
          Encontrados: <strong className="text-neutral-950 font-bold">{filteredPerfumes.length}</strong> productos
          {selectedCategory !== 'Todas' && ` en ${selectedCategory}`}
          {selectedBrand !== 'Todas' && ` · ${selectedBrand}`}
        </div>

      </div>

      {/* Collapsible Advanced Filters */}
      {showAdvanced && (
        <div className="pt-4 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-neutral-800 animate-fadeIn bg-neutral-50 p-4 rounded-md">
          
          {/* Concentration */}
          <div className="space-y-1.5">
            <label className="font-bold uppercase tracking-wider text-neutral-900 block">
              Concentración / Tipo
            </label>
            <div className="relative">
              <select
                value={selectedConcentration}
                onChange={(e) => setSelectedConcentration(e.target.value)}
                className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-burgundy-900 appearance-none cursor-pointer"
              >
                {CONCENTRATIONS.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-neutral-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Sort order */}
          <div className="space-y-1.5">
            <label className="font-bold uppercase tracking-wider text-neutral-900 block">
              Ordenar por
            </label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white border border-neutral-300 rounded px-3 py-2 text-xs font-semibold text-neutral-900 focus:outline-none focus:ring-2 focus:ring-burgundy-900 appearance-none cursor-pointer"
              >
                <option value="destacados">Destacados & Bestsellers</option>
                <option value="nombre-asc">Nombre: A - Z</option>
                <option value="nombre-desc">Nombre: Z - A</option>
              </select>
              <ChevronDown className="w-4 h-4 text-neutral-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
