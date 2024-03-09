/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        "1p5": "1.5px",
        1:"1px"
      },
      fontFamily: {
        "micro5": '"Micro 5", sans-serif',
        "press-start": '"Press Start 2P", system-ui',
        "poppins": '"Poppins", sans-serif'
      }
    },
  },
  plugins: [],
}

