/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
  extend: {
    fontFamily: {
      nanum: ['NanumSquare'],
      dohyeon: ['BMDOHYEON'],
    },
    colors: {
      '--fridge-primary': '#0E3348',
      '--fridge-secondary': '#0E3348',
      '--fridge-gray': '#D9D9D9',
      '--fridge-input-gray': '#B0B0B0',
      '--fridge-nav-gray': '#666565',
      '--fridge-black': '#000000',
      '--fridge-white': '#FFFFFF',
      '--fridge-skyblue': '#DCF2FF',
      '--fridge-red': '#F83319',
    },
  },
},
  plugins: [],
};
