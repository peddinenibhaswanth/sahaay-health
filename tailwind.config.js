/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EFF7F4',
          100: '#DCEDE7',
          200: '#B9DAD2',
          300: '#8BC2B6',
          400: '#52A196',
          500: '#2C837A',
          600: '#0F766E',
          700: '#0B5F5A',
          800: '#0A4B47',
          900: '#073B38',
          950: '#052B29',
        },
        sky: {
          50: '#EEF5FB',
          100: '#DCEBF7',
          200: '#BBD8EE',
          300: '#8FBEDF',
          600: '#2F6F9E',
          700: '#275E87',
          800: '#1F4C6D',
        },
        sand: {
          50: '#FDFAF3',
          100: '#F8F0E1',
          200: '#F0E0C6',
          300: '#E5CBA5',
          600: '#A9692F',
        },
        ink: '#12211E',
        muted: '#4F635E',
        line: '#DDE8E4',
        canvas: '#FAFCFB',
        cream: '#FAF7F0',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(7,59,56,.04), 0 16px 40px -24px rgba(7,59,56,.25)',
        lift: '0 2px 4px rgba(7,59,56,.05), 0 28px 60px -30px rgba(7,59,56,.35)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
