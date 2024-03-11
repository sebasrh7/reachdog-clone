/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

