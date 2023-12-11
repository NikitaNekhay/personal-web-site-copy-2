const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      'sm': {'min':'374px','max': '799px'}, //'414px',  
      // => @media (min-width: 640px) { ... }

      'md':  {'min': '800px', 'max': '1023px'},
      // => @media (min-width: 800px) { ... }

      'lg':  {'min': '1024px', 'max': '1279px'}, //'1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'}, //'1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        "black-0": "#000000",
        "black-1": "#1E1014",
        "navy-1": "#241e4eff",
        "navy-2": "#240b36ff",
        "white-0": "#ffffffff",
        "white-1": "#FBF7F4",
        "white-2": "#F3EBE9",
        "red-0": "#a4031fff",
        "red-1": "#9F2D2D",
        "red-2": "#C53030",
        "yellow-0": "#f6ae2dff",
        "blue-0" : "#0496ffff",
        "orange-0": "#fe7f2dff;", 
      },
      fontFamily:{
        'maven':['Maven Pro','sans-serif'],
        'anonymous': ['Anonymous Pro','monospace'],
        'abril': ['Abril Fatface','cursive']
       
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),   
    require('@tailwindcss/aspect-ratio'), 
  ],
}
