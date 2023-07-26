/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Mandalin': ['Mandalin', 'sans-serif'],
      },
      colors: {
        'Teteu': '#15CF81',
        'Fundo': '#1D1C1D',
        gray: {
          '100': '#D9D9D9',
          '300': '#C3C3C3',
          '400': '#8D8D8D',
          '600': '#7B7B7B',
          '700': '#313031'
        }
      }
    },
  },
  plugins: [],
}

