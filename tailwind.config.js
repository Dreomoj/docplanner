/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary:"#00b39b",
        secondary:{
          100:"#3d83df",
          200:"#d0faf4",
        }
      },
    },
  },
  plugins: [],
}

