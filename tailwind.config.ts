import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '3rem',
        xl: '3.5rem',
        '2xl': '4rem',
      },
    },
    extend: {
      colors: {
        brand: {
          50: '#F3F5FF',
          100: '#E6EBFF',
          200: '#C7D2FF',
          300: '#A0B2FF',
          400: '#6F87FF',
          500: '#3F5FF5',
          600: '#1F44CE',
          700: '#002366',
          800: '#001B4D',
          900: '#001033',
        },
        accent: {
          50: '#E8F2FF',
          100: '#D1E6FF',
          200: '#A3CEFF',
          300: '#75B5FF',
          400: '#479DFF',
          500: '#007BFF',
          600: '#0062D1',
          700: '#004CA6',
          800: '#00357A',
          900: '#00204F',
        },
        neutral: {
          25: '#FCFCFD',
          50: '#F5F5F5',
          100: '#EBEDF2',
          200: '#D8DCE6',
          300: '#B6BCCB',
          400: '#939AAD',
          500: '#71798F',
          600: '#545B6E',
          700: '#3A4050',
          800: '#212736',
          900: '#121626',
        },
        ink: '#0A1128',
        surface: '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Lato', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 25px 60px -35px rgba(0, 35, 102, 0.35)',
        card: '0 30px 70px -30px rgba(0, 17, 51, 0.35)',
        outline: '0 0 0 3px rgba(0, 123, 255, 0.35)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
        '3xl': '2.5rem',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #002366 0%, #004CA6 45%, #007BFF 100%)',
        'gradient-radial': 'radial-gradient(circle at top left, rgba(0, 123, 255, 0.18), transparent 55%)',
      },
      maxWidth: {
        '8xl': '96rem',
      },
    },
  },
  plugins: [],
}

export default config
