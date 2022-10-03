/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      m:"890px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: "Helvetica, Arial, sans-serif,Open_sans",
      },
      colors: {
        darkGrayishBlue: "hsl(227,12%,61%)",
        purple: "hsl(288, 79%, 33%)",
        indigo: "rgb(55 48 163)",
      },
    },
  },
  plugins: [],
};
