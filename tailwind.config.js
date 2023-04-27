const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
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
  ],
}
