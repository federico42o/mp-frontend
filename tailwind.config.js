/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        "screen/2": "50vh",
        "screen/3": "33vh",
        "screen/4": "25vh",
    
      },
    },
  },
  plugins: [],
}
