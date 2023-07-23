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
  },
}
