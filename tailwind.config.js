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
    extend: {
      fontWeight: {
        'weight-inherit': 'inherit',
      },
    },
  },
}
