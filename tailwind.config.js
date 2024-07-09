/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['valorantFont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

