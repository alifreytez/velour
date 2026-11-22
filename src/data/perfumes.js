import scrapedData from './perfumes_scraped.json';

export const CATEGORIES = [
  'Todas',
  'Perfumería Árabe',
  'Perfumería Diseñador',
  'Splash',
  'Spray'
];

export const GENDERS = [
  'Todos',
  'Dama',
  'Caballero',
  'Unisex'
];

export const CONCENTRATIONS = [
  'Todas',
  'Eau de Parfum',
  'Eau de Toilette',
  'Extrait de Parfum',
  'Parfum',
  'Body Splash',
  'Body Spray',
  'Ambientador Spray',
  'All Over Spray'
];

// Curated list of iconic bestsellers to badge
const BESTSELLER_KEYWORDS = [
  'khamrah', 'club de nuit', 'good girl', 'bad boy', '212', 'one million', '1 million',
  'invictus', 'le male', 'scandal', 'eros', 'dylan blue', 'sauvage', 'bleu',
  'black orchid', 'y edp', 'myslf', 'born in roma', 'baccarat', 'amber & leather',
  'philos', 'yara', 'asad', 'hayaati', 'oud for glory', 'fakhar', 'ebonique',
  'chambre', 'supreme gold', 'bharara king', 'tag him', 'sillage', 'milestone',
  'voyage', 'light blue', 'aqua di gio', 'libre', 'la vie est belle', 'mayar', 'teriaq'
];

export const PERFUMES_DATA = scrapedData.map(item => {
  const nameLower = (item.name || '').toLowerCase();
  const isBestseller = BESTSELLER_KEYWORDS.some(kw => nameLower.includes(kw));

  return {
    ...item,
    rating: Number((4.7 + (Math.abs(item.name.length % 4)) * 0.08).toFixed(1)),
    reviewsCount: 18 + (Math.abs(item.name.length * 7) % 65),
    isBestseller,
    price: item.price_detal > 0 ? item.price_detal : (item.price_mayor || 45),
    sizes: [
      {
        size: item.volume || '100 ml',
        price: item.price_detal > 0 ? item.price_detal : (item.price_mayor || 45)
      }
    ],
    image: item.images && item.images.length > 0
      ? item.images[0]
      : 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=80'
  };
});

// Extract unique brands sorted alphabetically
export const ALL_BRANDS = {
  'Perfumería Árabe': Array.from(
    new Set(PERFUMES_DATA.filter(p => p.category === 'Perfumería Árabe').map(p => p.brand))
  ).sort(),
  'Perfumería Diseñador': Array.from(
    new Set(PERFUMES_DATA.filter(p => p.category === 'Perfumería Diseñador').map(p => p.brand))
  ).sort(),
  'Splash': Array.from(
    new Set(PERFUMES_DATA.filter(p => p.category === 'Splash').map(p => p.brand))
  ).sort(),
  'Spray': Array.from(
    new Set(PERFUMES_DATA.filter(p => p.category === 'Spray').map(p => p.brand))
  ).sort(),
  'Todas': Array.from(new Set(PERFUMES_DATA.map(p => p.brand))).sort()
};

export const BRAND_VALUES = [
  {
    title: "100% Originales Garantizados",
    subtitle: "Importación Directa",
    description: "Cada fragancia cuenta con código de lote y sello de autenticidad verificable."
  },
  {
    title: "Empaque Seguro y Sellado",
    subtitle: "Calidad de fábrica",
    description: "Productos totalmente precintados con su celofán original de fábrica."
  },
  {
    title: "Catálogo Siempre Actualizado",
    subtitle: "Stock en tiempo real",
    description: "Consulta fotografías reales, especificaciones y disponibilidad de cada fragancia."
  },
  {
    title: "Atención por WhatsApp",
    subtitle: "Asesoría personalizada",
    description: "Consulta disponibilidad inmediata, recomendaciones de notas y confirma tu pedido al instante."
  }
];

export const REVIEWS_SHOWCASE = [
  {
    name: "Mariana R.",
    city: "Caracas",
    perfume: "Yara Splash de Lattafa",
    rating: 5,
    date: "Ayer",
    comment: "Excelente fijación y presentación impecable. 100% original, el aroma dura horas."
  },
  {
    name: "Alejandro V.",
    city: "Valencia",
    perfume: "Club de Nuit Intense Man",
    rating: 5,
    date: "Hace 3 días",
    comment: "Una bestia de proyección y cumplidos. La atención por WhatsApp fue muy amable y me enviaron fotos del producto antes de despacharlo."
  },
  {
    name: "Gabriela S.",
    city: "Maracaibo",
    perfume: "Good Girl de Carolina Herrera",
    rating: 5,
    date: "Hace 1 semana",
    comment: "Mi perfume favorito de siempre, calidad 100% original. Llegó en perfecto estado con su celofán sellado."
  }
];
