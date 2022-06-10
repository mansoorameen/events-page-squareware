module.exports = {
  content: ["./pages/*.{html,js,jsx}", "./components/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      fontSize: {
        lgx: "22px",
      },
      screens: {
        "3xl": "1920px",
      },
      height: {
        360: "360px",
        400: "400px",
        480: "480px",
        300: "300px",
      },
      colors: {
        grey: "#CCCCCC",
        background: "#161616",
      },
      borderRadius: {
        "1xl": "0.875rem",
      },
    },
  },
  plugins: [],
};
