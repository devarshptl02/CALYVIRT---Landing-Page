/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        midnight: '#0b1120',
        cyan: {
          glow: '#00f0ff',
        },
        gold: {
          glow: '#ffd700',
        }
      }
    },
  },
  plugins: [],
}
