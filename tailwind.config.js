/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#071526', deep: '#050d17', surface: '#0b1d30', card: '#0e2238', line: '#1d3449' },
        accent: { DEFAULT: '#5A86A8', dark: '#456c88', light: '#8fb0c8' },
        text: { DEFAULT: '#f5f7fa', muted: '#a6b4c2', faint: '#6f8292' },
      },
      fontFamily: { display: ['"Playfair Display"', 'Georgia', 'serif'], sans: ['Manrope', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
};
