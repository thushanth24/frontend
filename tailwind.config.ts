import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f6ff',
          100: '#d4e2ff',
          200: '#a9c6ff',
          300: '#7dabff',
          400: '#528fff',
          500: '#2674ff',
          600: '#0d5ade',
          700: '#0845a7',
          800: '#05316f',
          900: '#021c38'
        }
      }
    }
  },
  plugins: []
};

export default config;
