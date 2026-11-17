/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#faf2f3',
          100: '#f4e5e7',
          200: '#ebd0d4',
          300: '#dcadb5',
          400: '#c57f8b',
          500: '#ac5765',
          600: '#913f4d',
          700: '#79313d',
          800: '#652a33',
          900: '#4b1018', // Logo Primary Base
          950: '#2b070d', // Deep Velvet Noir
        },
        champagne: {
          50: '#faf8f5',
          100: '#f3ede2',
          200: '#e7d9bf',
          300: '#d7be96',
          400: '#c5a36e',
          500: '#b48a4f',
          600: '#9d7140',
          700: '#7f5835',
          800: '#67472e',
          900: '#543b28',
        },
        silk: {
          50: '#ffffff',
          100: '#faf9f7',
          200: '#f8f7f4', // Logo Ivory Tint
          300: '#f1ede6',
          400: '#e5ded2',
          500: '#d4c8b6',
          600: '#b8a994',
          700: '#8e7f6c',
          800: '#5e5345',
          900: '#2d2720',
          950: '#171410',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Montserrat"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(75, 16, 24, 0.15)',
        'luxury-hover': '0 25px 50px -12px rgba(75, 16, 24, 0.25)',
        'gold-glow': '0 0 25px -5px rgba(197, 163, 110, 0.35)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
