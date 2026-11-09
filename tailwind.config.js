/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        twilight: {
          50: '#FBF9F7',
          100: '#F5EFE9',
          200: '#EBDCD0',
          300: '#DCC3B2',
          400: '#C79E88',
          500: '#AD7863',
          600: '#8E5B49',
          700: '#684033',
          800: '#432921',
          900: '#231511',
        },
        dusk: {
          50: '#F6F5F9',
          100: '#EDEAF3',
          200: '#DDD6E7',
          300: '#C3B6D5',
          400: '#A490BF',
          500: '#866DA8',
          600: '#6C528E',
          700: '#553E72',
          800: '#3D2A54',
          900: '#241735',
          950: '#140C20',
        },
        blush: {
          50: '#FDF7F7',
          100: '#FBEEEE',
          200: '#F6D9D9',
          300: '#EBBAB9',
          400: '#DD9392',
          500: '#CC6C6B',
          600: '#B54D4C',
        },
        rosegold: {
          300: '#E8C5AC',
          400: '#D9AB8D',
          500: '#C68B68',
          600: '#A86C48',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(85, 62, 114, 0.07)',
        'dusk': '0 12px 36px -4px rgba(36, 23, 53, 0.15)',
        'glow': '0 0 30px rgba(221, 147, 146, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
};
