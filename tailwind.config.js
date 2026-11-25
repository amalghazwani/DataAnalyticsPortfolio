/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#070D1A',
          deep: '#050912',
          surface: '#0B1629',
          card: '#0D1A2E',
          line: '#1C2A40',
        },
        accent: {
          DEFAULT: '#4EA3FF',
          dark: '#347FCB',
          light: '#72B8FF',
          muted: '#6F8EAD',
        },
        text: {
          DEFAULT: '#F2F5FA',
          muted: '#98A7BA',
          faint: '#65748A',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0, 0, 0, 0.35), 0 12px 34px rgba(0, 0, 0, 0.24)',
        cardHover: '0 2px 5px rgba(0, 0, 0, 0.42), 0 20px 55px rgba(0, 0, 0, 0.38)',
        glow: '0 0 0 1px rgba(78, 163, 255, 0.18), 0 10px 34px rgba(78, 163, 255, 0.14)',
      },
    },
  },
  plugins: [],
};
