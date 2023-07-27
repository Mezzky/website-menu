/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    screens: {
      'sm': '320px',
      'md': '375px', 
      'lg': '425px',
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', 'sans-serif'",
        outfit: "'Outfit', 'sans-serif'",
        quicksand: "'Quicksand', 'sans-serif'"
      },

      colors: {
        box: 'rgba(120, 120, 120, 0.2)',
        text: '#FBFBFB',
        span: '#4BA7D8',
        main: '#500DE0',
        boxborder: '#4D4D4D',
        bg: '#0C0F16',
      },
    },
  },
  plugins: [],
}

