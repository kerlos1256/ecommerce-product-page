module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xs: "456px",
      },
      colors: {
        primary: "#ff7d1a",
        pale: "#ffede0",

        varkBlue: "#1d2025",
        darkGrayishBlue: "#68707d",
        lightGrayishBlue: "#f7f8fd",
        grayishBlue: "#b6bcc8",
      },
      boxShadow: {
        purchesBtn: "0 25px 50px -12px rgba(255, 125, 26, 0.25)",
        // "0 20px 25px -5px rgba(255, 125, 26,0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
