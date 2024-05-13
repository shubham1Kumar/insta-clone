/** @type {import('tailwindcss').Config} */

export default {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        rs: "0px",
      },
    },
  },
  plugins: [require('daisyui'),],
}