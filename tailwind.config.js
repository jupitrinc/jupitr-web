const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/**/**/*.{js,ts,jsx,tsx}",
    "./layouts/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/**/*.{js,ts,jsx,tsx}",
    "./ui-library/**/*.{js,ts,jsx,tsx}",
    "./ui-library/**/**/*.{js,ts,jsx,tsx}",
    "./ui-library/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      mw: ["Merriweather Sans", ...defaultTheme.fontFamily.sans],
      roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
}
