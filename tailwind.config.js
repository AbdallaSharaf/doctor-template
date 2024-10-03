/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#407fd5',
        'secondary': '#0d3c85'
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],  // Replace the default sans with 'Rubik'
      },
    },
  },
  plugins: [],
}