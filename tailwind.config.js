/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },

    extend: {
      colors: {
        parabolaPurple: "#1C1B2D",
        parabolaBlue: "#15BDCD",
        parabolaYellow: "#EBB22C",
        parabolaRed: "#E01E5B",
        parabolaOrange: "#FB9058",
        parabolaGray: "#28273E",
      },
      fontSize: {
        "3xs": "5px",
        "2xs": "10px",
      },
    },
  },
  plugins: [],
};
