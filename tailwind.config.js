/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#090A12',
          deep: '#070811',
          surface: '#0B0B1A',
          card: '#111022',
          line: '#29253D',
        },

        accent: {
          DEFAULT: '#B88CEF',
          dark: '#8E63C9',
          light: '#D9B9F5',
          muted: '#9B6BC2',
        },

        text: {
          DEFAULT: '#F4F1F5',
          muted: '#A9A4AE',
          faint: '#716B78',
        },
      },

      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        card:
          '0 1px 2px rgba(0, 0, 0, 0.35), 0 8px 28px rgba(0, 0, 0, 0.28)',

        cardHover:
          '0 2px 4px rgba(0, 0, 0, 0.4), 0 18px 44px rgba(0, 0, 0, 0.45)',

        glow:
          '0 0 0 1px rgba(184, 140, 239, 0.20), 0 8px 30px rgba(184, 140, 239, 0.12)',
      },
    },
  },

  plugins: [],
};