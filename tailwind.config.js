/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./helpers/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'trap-regular': ['Trap-Regular'],
        'trap-bold': ['Trap-Bold'],
        'trap-medium': ['Trap-Medium'],
        'trap-light': ['Trap-Light'],
      },
    },
  },
  plugins: [],
}

