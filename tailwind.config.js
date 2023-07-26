/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'PoppinsBold': ['Poppinsbold', 'sans-serif'],
        'PoppinsSemi': ['Poppinssemi', 'sans-serif'],
        'Mandalin': ['Mandalin', 'sans-serif'],
      },
      colors: {
        'Palette-1': '#859F3D',
        'Palette-2': '#F1F4DF',
        'Palette-3': '#091938',
        'Palette-4': '#4F5853',
      }
    },
  },
  plugins: [],
}

