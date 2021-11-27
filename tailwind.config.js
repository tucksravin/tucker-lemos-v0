const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color: {
      gray: colors.blueGray,
      purple: colors.violet,
      blue: colors.sky
    },
    extend: {    },
  },
  variants: {
    extend: {
      tranformation: ['group-hover'],
      translation: ['group-hover'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
}
