import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './UI/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ['var(--font-nunito-sans)'],
        inter: ['var(--font-inter)'],
      },
      fontSize: {
        'heading-2xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
        'heading-xl': ['2rem', { lineHeight: '2.25rem' }], // 32px
        'heading-lg': ['1.75rem', { lineHeight: '2rem' }], // 28px
        'heading-md': ['1.5rem', { lineHeight: '1.75rem' }], // 24px
        'heading-sm': ['1.25rem', { lineHeight: '1.5rem' }], // 20px
        'heading-xs': ['1rem', { lineHeight: '1.25rem' }], // 16px
        'body-l': ['1rem', { lineHeight: '1.5rem' }], // 16px
        'body-m': ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        'body-s': ['0.75rem', { lineHeight: '1rem' }], // 12px
        caption: ['0.625rem', { lineHeight: '0.875rem' }], // 10px
      },
      colors: {
        primary: {
          0: '#ffffff', // white
          100: '#f7f7f7',
          200: '#eeeeee',
          300: '#e5e5e5',
          400: '#dddddd',
          500: '#d4d4d4',
          600: '#cccccc',
          700: '#c3c3c3',
          800: '#bbbbbb',
          900: '#b2b2b2',
        },
        neutral: {
          100: '#ffffff',
          200: '#fafafa',
          300: '#EEEFF0',
          400: '#f5f5f5',
          500: '#f0f0f0',
          600: '#d9d9d9',
          700: '#bfbfbf',
          800: '#8c8c8c',
          900: '#595959',
          1000: '#434343',
          1100: '#262626',
          1200: '#1f1f1f',
          1300: '#141414',
          1400: '#000000',
        },
        secondary: {
          0: '#f5f5f5', // light gray
          100: '#ebebeb',
          200: '#e0e0e0',
          300: '#d6d6d6',
          400: '#cccccc',
          500: '#c2c2c2',
          600: '#b8b8b8',
          700: '#adadad',
          800: '#a3a3a3',
          900: '#999999',
        },
        accent: {
          0: '#e6f7ff', // light blue
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff', // primary blue
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        success: {
          100: '#d9f7be', // light green
          500: '#52c41a', // primary green
          900: '#237804', // dark green
        },
        error: {
          100: '#ffa39e', // light red
          500: '#f5222d', // primary red
          900: '#a8071a', // dark red
        },
      },
      flex: {
        2: '2 2 0%',
        3: '3 3 0%',
        4: '4 4 0%',
        5: '5 5 0%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
