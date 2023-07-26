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
        'Background-1': '#859F3D',
        'Background-2': '#F1F4DF',
        'Typography': '#091938'
      }
    },
  },
  plugins: [],
}

