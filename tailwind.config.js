/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-short': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'bounce-short': 'bounce-short 0.6s ease-in-out infinite',
      },
      transitionDelay: {
        '200': '0.2s',
        '400': '0.4s',
      }
    },
  },
  plugins: [],
}
