import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        gray: {
          light: '#f1f3f4',
          DEFAULT: '#9aa0a6',
          dark: '#202124',
        },
        blue: {
          light: '#e8f0fe',
          DEFAULT: '#4285f4',
          dark: '#1967d2',
        },
        red: {
          light: '#fce8e6',
          DEFAULT: '#ea4335',
          dark: '#d93025',
        },
        green: {
          light: '#e6f4ea',
          DEFAULT: '#34a853',
          dark: '#1e8e3e',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        pic: "url('/images/pic-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
