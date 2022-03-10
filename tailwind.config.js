// const colors = require("tailwindcss/colors");
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: "jit",
  purge: ["./src/**/*.vue"],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
    extend: {
      scale: {
        '103': '1.03'
      },
      boxShadow: {
        'custom': '0px 0px 5px 0.5px rgba(0,0,0,0.28)'
      },
      screens: { '3xl': '1600px' },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        aileron: ["Aileron", "sans-serif"]
      },
      backgroundColor: {
        primary: "#6317A7",
        secondary: "#6317A7",
        light: "#B163E2",
        orange: "#EA5E5D",
        pink: "#ED4E94",
        grey: "#ECEFF4"
      },
      borderColor: {
        primary: "#6317A7",
        secondary: "#6317A7",
        grey: "#707070"
      },
      textColor: {
        primary: "#6317A7",
        black: "#2A2A2A",
        light: "#B163E2",
        orange: "#EA5E5D",
        grey: '#878787'
      },
      colors: {
        gray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        blue: {
          100: "#ebf8ff",
          200: "#bee3f8",
          300: "#90cdf4",
          400: "#63b3ed",
          500: "#4299e1",
          600: "#3182ce",
          700: "#2b6cb0",
          800: "#2c5282",
          900: "#2a4365",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '90%',
          '@screen sm': {
            maxWidth: '90%',
          },
          '@screen md': {
            maxWidth: '90%',
          },
          '@screen lg': {
            maxWidth: '95%',
          },
          '@screen xl': {
            maxWidth: '96%',
          },
          '@screen 2xl': {
            maxWidth: '98%',
          },
        }
      })
    },
  ]
};
