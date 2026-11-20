/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0E1518',
          deep: '#0A1013',
          surface: '#141E22',
          card: '#162227',
          line: '#25343A',
        },
        accent: {
          DEFAULT: '#5CA3B2',
          dark: '#3F8494',
          light: '#8FBEC9',
          muted: '#6E9BA5',
        },
        text: {
          DEFAULT: '#E8ECEC',
          muted: '#93A2A8',
          faint: '#6B7B82',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(0, 0, 0, 0.3), 0 8px 28px rgba(0, 0, 0, 0.25)',
        cardHover:
          '0 2px 4px rgba(0, 0, 0, 0.3), 0 18px 44px rgba(0, 0, 0, 0.38)',
        glow: '0 0 0 1px rgba(92, 163, 178, 0.18), 0 8px 30px rgba(92, 163, 178, 0.08)',
      },
    },
  },
  plugins: [],
};
