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
          DEFAULT: '#5A86A8',
          dark: '#456C88',
          light: '#7A9CB7',
          muted: '#6C8498',
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
        glow: '0 0 0 1px rgba(90, 134, 168, 0.18), 0 10px 34px rgba(90, 134, 168, 0.14)',
      },
    },
  },
  plugins: [],
};
