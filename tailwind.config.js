/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamilly:{
        sans:['Roboto','sans-seri']
      }
    },
  },
  plugins: [],
}
