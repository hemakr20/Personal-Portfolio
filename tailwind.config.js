/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor : {
        'primary' : 'rgb(228, 111, 136)',
        'secondary' : 'rgb(253, 229, 211)'
      }
    },
    fontFamily: {
      'hero-font': 'Bitcount Grid Single Ink'
    }
  },
  plugins: [],
}

