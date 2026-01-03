/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',
        'dark-card': '#1e293b',
        'accent-teal': '#2dd4bf',
        'accent-blue': '#38bdf8',
        'primary': '#0f172a',
        'secondary': '#1e293b'
      },
      borderColor : {
        'primary' : '#334155',
        'secondary' : '#2dd4bf'
      }
    },
    fontFamily: {
      'hero-font': ['Space Mono', 'monospace'],
      'sans': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
}
