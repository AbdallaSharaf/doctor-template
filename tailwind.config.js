/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-text': 'var(--text-primary)',
        'secondary-text': 'var(--text-secondary)',
        'header-text': 'var(--text-header)',
        'primary-link': 'var(--text-link)',
        'primary-bg': 'var(--bg-primary)',
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
      screens: {
        'mobileS': '320px',
        // => @media (min-width: 640px) { ... }
  
        'mobileM': '375px',
        // => @media (min-width: 1024px) { ... }
  
        'mobileL': '425px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}