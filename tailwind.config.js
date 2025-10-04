// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Reemplaza la fuente base
        poppins: ['Poppins', 'sans-serif'], // otra opción
      },
    },
  },
  plugins: [],
}
