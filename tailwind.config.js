const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    color: {
      gray: colors.blueGray,
      purple: colors.violet
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
