/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#12080C',
          deep: '#0B0507',
          surface: '#17090F',
          card: '#211017',
          line: '#3A2028',
        },

        accent: {
          DEFAULT: '#E58AAF',
          dark: '#C97899',
          light: '#F2B7CB',
          muted: '#B87894',
        },

        text: {
          DEFAULT: '#F5F1F2',
          muted: '#B5A8AD',
          faint: '#776A70',
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
          '0 0 0 1px rgba(229, 138, 175, 0.20), 0 8px 30px rgba(229, 138, 175, 0.14)',
      },
    },
  },

  plugins: [],
};
