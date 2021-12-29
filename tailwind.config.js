module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  variants: {},
  theme: {
    fontFamily: {
      'second': ['Work Sans', 'sans-serif'],
      'main-heading': ['Moniqa Black Narrow Heading'],
      'main-display': ['Moniqa Black Narrow Display'],
      'main-paragraph': ['Moniqa Black Narrow Paragraph']
    },
    extend: {
      screens: {
        '3xl': '1650px'
      },
      colors: {
        black: '#000000',
        red: '#ff0000',
        grey: '#e1e0dd',
        'primary': '#ff003c',
        'secondary': '#607d8b',
        'dark': '#2c2b2a',
        'light-b': '#eae8e4',
        'light-f': '#f2efea',
        'light-ff': '#f7f4ee',

        'product-blue': '#4a4d78',
        'product-red': '#ea1456',
        'product-green': '#346a1d',
        'product-black': '#191919'
      },
      fontSize: {
        'huge': ['12rem', {
          lineHeight: '10rem'
        }],
        'big': ['7rem', {
          lineHeight: '6.5rem'
        }]
      },
      backgroundImage: {
        'soundwave': "url('/img/soundwave-small.png')",
        'logo': "url('/img/logo-2.png')"
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};