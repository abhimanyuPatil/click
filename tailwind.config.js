module.exports = {
  mode: "jit",
  purge: ["./src/**/*.vue"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Aileron', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        primary: "#6317A7",
        secondary: "#6317A7",
        light: "#B163E2",
      },
      borderColor: {
        primary: "#6317A7",
        secondary: "#6317A7",
      },
      textColor: {
        primary: "#6317A7",
        secondary: "#6317A7",
      },
    },
  },
  plugins: [],
};
