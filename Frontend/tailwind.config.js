/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
        cabin: ['Archivo', 'sans-serif']
      },
      colors: {
        main_background: "#E5E8ED",
        primary: "rgb(145, 85, 253)",
        primary_gradient: 'bg-gradient-to-r from-purple-400 to-indigo-600',
      },
    },
  },
  plugins: [],
}