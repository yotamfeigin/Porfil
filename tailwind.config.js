/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: "#1fdf64",
        Black: "#000",
        DeepNightBlack: "#121212",
        MidNightBlack: "#181818",
        EveningBlack: "#1a1a1a",
        DarkGray: "#282828",
        SlateGray: "#404040",
        LightGray: "#959595",
        SilverGray: "#B3B3B3",
        Snow: "#ffffff",
      },
      fontFamily: {
        'cascadia-normal': ['Cascadia Code', 'monospace'],
        'circular': ['Circular Std', 'sans-serif'],
        'circular-light': ['Circular Std Light', 'sans-serif'],
        'circular-normal': ['Circular Std Normal', 'sans-serif'],
        'circular-medium': ['Circular Std Medium', 'sans-serif'],
        'circular-bold': ['Circular Std Bold', 'sans-serif'],
      }
    },
  },
}
