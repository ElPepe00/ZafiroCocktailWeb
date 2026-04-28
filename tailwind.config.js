/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        zafiro: {
          navy: '#001930',
          gold: '#C8A96E',
          crema: '#F5F2EC',
          dark: '#111111',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      letterSpacing: {
        tag: '0.15em',
      },
    },
  },
  plugins: [],
}

