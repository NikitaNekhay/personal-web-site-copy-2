const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'sm': { 'min': '374px', 'max': '414px' }, //'414px',  
      // => @media (min-width: 640px) { ... }

      'md': { 'min': '415px', 'max': '1023px' },
      // => @media (min-width: 800px) { ... }

      'lg': { 'min': '1024px', 'max': '1279px' }, //'1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': { 'min': '1280px', 'max': '1536px' }, //'1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1537px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "black-0": "#000000",
        "black-1": "#1E1014",
        "navy-1": "#241e4eff",
        "navy-2": "#240b36ff",
        "white-0": "#ffffffff",
        "white-1": "#FBF7F4",
        "white-2": "#F3EBE9",
        "red-0": "#a4031fff",
        "red-1": "#9F2D2Dff",
        "red-2": "#C53030ff",
        "yellow-0": "#f6ae2dff",
        "blue-0": "#0496ffff",
        "orange-0": "#fe7f2dff;",
        "green-0": "#90e39aff",
        "green-1": "#44af69ff",
      },
      fontFamily: {
        'maven': ['Maven Pro', 'sans-serif'],
        'anonymous': ['Anonymous Pro', 'monospace'],
        'abril': ['Great Vibes', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],

      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '100%': { opacity: 1 },
          '0%': { opacity: 0 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out forwards',
        fadeOut: 'fadeOut 0.7s ease-in-out backwards',
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-yellow': {
          textShadow: '0 1px 0 rgba(246, 174, 45, 0.4)', // Text shadow with yellow-0 RGB color and 40% opacity
        },
      });
    },
  ],
}
