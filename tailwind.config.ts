/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Philosopher', 'serif'],
      },
      keyframes: {
        spinY: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'spinY': 'spinY 3s linear infinite',
      },
    },
  },
  plugins: [],
}

