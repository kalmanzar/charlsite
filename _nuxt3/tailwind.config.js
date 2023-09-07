/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      'xxxxs': '283px',
      'xxxs': '374px',
      'xxs': '389px',
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      borderRadius: {
        'imageLink': '4rem',
      },
      colors: {
        'off-white': '#e6e0c8',
        'customStone': '#E7E5E4'
      },
      fontFamily: {
        neckPain: ['NeckPain'],
        centuryGothic: ['CenturyGothic'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        '3xl': '1600px',
        '4xl': '2000px',
      },
      spacing: {
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '208': '52rem',
        '224': '56rem',
        '240': '60rem',
        '256': '64rem',
        '272': '68rem',
        '288': '72rem',
        '304': '76rem',
      },
      width: {
        '15/24': '62.5%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

