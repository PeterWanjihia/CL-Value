/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        red: "#F24A4E",
        white: "#fff",
        bcolor: "#ccc",
        lblack: "#777",
        black: "#111",
        input: "#efefef",
      },
    },
  },
  plugins: [],
};
