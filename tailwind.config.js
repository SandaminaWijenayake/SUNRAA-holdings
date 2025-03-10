/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        Montserrat: ["Montserrat", "serif"],
        robotoSlab: ["Roboto Slab", "serif"],
        karla: ["Karla", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      colors: {
        lightOrange: "#E98C81",
      },
    },
  },
  plugins: [],
};
