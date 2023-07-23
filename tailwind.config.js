const R = require('ramda');
const defaultConfig = require('tailwindcss/defaultTheme');

/** 
 * @type { import('tailwindcss').Config }
 *  */
module.exports = {
  content: ['./index.html', "./src/**/*.{vue,ts}"],

  plugins: [
    "tailwindcss",
    "autoprefixer",
  ],

  theme: {
    container: {
      screens: {
        ...R.omit(['xl', '2xl'], defaultConfig.screens),
      },
    },

    screens: {
      xs: '375px',
      ...defaultConfig.screens,
    },

    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },

      colors: {
        ...mirrorHexColors([
          '#191919',
          '#ffffff',
        ]),
      },
    },
  },
}

function mirrorHexColors(colors) {
  return R.compose(
    R.reduce((accumulator, current) => ({...accumulator, [current.replace('#', '')]: current}), {}),
  
    R.ifElse(
      R.equals(colors),
      R.identity,
      () => {throw new Error('Colors should be unique')},
    ),
  
    R.uniq,
  
    R.ifElse(
      R.equals(colors),
      R.identity,
      () => {throw new Error('Colors should be sorted alphabeticaly')},
    ),
  
    R.sortBy(R.identity),
  
    R.map(color => {
      const lowercaseColor = color.toLowerCase()
  
      if(lowercaseColor === color) {
        return lowercaseColor
      }
  
      throw new Error('All colors should be lowercase')
    }),
  )(colors);
}