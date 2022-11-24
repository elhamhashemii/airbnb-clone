/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'primary': '#ff385c',
      'secondary' : '#f7f7f7',
      'black' : '#000',
      'white' : '#fff',
      'gray' : '#e4e4e7'
    },
  },
  plugins: [],
}
