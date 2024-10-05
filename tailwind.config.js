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
        'secondary': '#0d3c85',
        'team-red': '#ff6347',
        'team-blue': '#4682b4',
        'team-green': '#32cd32',
        'team-orange': '#ff4500',
        'team-sky': '#1e90ff',
      },
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        serif: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}