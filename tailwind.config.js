/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        'firacode': ['FiraCode', 'sans-serif'],
        'PlexMono': ['IBM Plex Mono', 'sans-serif'],
        'PTSans': ['PT Sans', 'sans-serif'],
      },
      colors: {
        'Teteu': '#15CF81',
        'Fundo': '#1D1C1D',
        gray: {
          '100': '#D9D9D9'
        }
      }
    },
  },
  plugins: [],
}

