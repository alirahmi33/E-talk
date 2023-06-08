/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      ,
      colors: {
        white: colors.white,
        blue: '#0F0840',
        red: ' #FF6B58',
        purple: '#9C4DF4',
        light: 'F3EBF5',
        lightest:'#3B3563',
        graydarkest:'5A547B',
        gray: '#706D80',
        graylight: '#F5EFF7',
        pink: '#F8C4C3',
        orange: '#FF6B58'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    plugins: [
    ],
  }
}
