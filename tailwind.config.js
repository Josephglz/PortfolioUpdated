/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu'],
      },
      colors: {
        background: "#010E1B",
        greenHighlight: "#11D13F",
        greenHover: "#35E888",
        grayOpacity: "#5A5A5A",
        whiteText: "#DEE2E6",
        orangeHighlight: "#F2B808",
        grayOption: "#1B2732",
      },
    },
  },
  plugins: [],
}