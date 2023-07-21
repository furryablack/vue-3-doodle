/** 
 * @type { import('tailwindcss').Config }
 *  */

module.exports = {
  content: ['./index.html', "./src/**/*.{vue,ts}"],

  plugins: [
    "tailwindcss",
    "autoprefixer",
  ],
}
