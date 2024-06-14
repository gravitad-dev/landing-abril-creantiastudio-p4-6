/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        fucsia_Custom: '#701A75',
        amber_Custom: '#FBBF24',
        'blue-light_Custom': '#0284C7',
        'blue-gray_Custom': '#0F172A',
        'blue-lightgray_Custom': '#94A3B8',
        'fucsia_Custom-translucent': 'rgba(112, 26, 117, 0.5)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/bgHero.png')",
        'products-pattern': "url('/bgProducts.png')",
      },
      screens: {
        break: '472px',
        break2: '640px',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};
