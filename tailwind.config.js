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
        allura: ["Allura", "cursive"],
      },
      colors: {
        lightOrange: "#E98C81",
      },
      transformOrigin: {
        'center': 'center',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};
