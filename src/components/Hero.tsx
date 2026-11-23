/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#09090B',
          deep: '#050506',
          surface: '#111013',
          card: '#171518',
          line: '#2B272A',
        },

        accent: {
          DEFAULT: '#E58AAF',
          dark: '#C97899',
          light: '#F1A9C5',
          muted: '#B87894',
        },

        text: {
          DEFAULT: '#F5F3F4',
          muted: '#A9A4A8',
          faint: '#716B70',
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
          '0 0 0 1px rgba(229, 138, 175, 0.18), 0 8px 30px rgba(229, 138, 175, 0.10)',
      },
    },
  },

  plugins: [],
};
