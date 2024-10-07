/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jua: ['Jua'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease forwards', // Add your fadeIn animation here
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' }, // Starting point
          '100%': { opacity: '1', transform: 'translateY(0)' }, // Ending point
        },
      },
    },
  },
  plugins: [],
}
