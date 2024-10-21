/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interV: ['Inter','sans-serif'],
        tinos: ["Tinos","serif"],
        italicss:['Sansita Swashed', 'cursive'],
        curive: [ "Editorial New", "sans-serif"]
      },
      screens: {
        vsm: "360px",
        sm: "640px",
        md: "768px",
        slg: "960px",
        lg: "1024px",
        xl: "1280px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      }
    },
  },
  plugins: [require("daisyui")],
}

