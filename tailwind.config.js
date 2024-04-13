/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'home-banner': "url('/src/assets/home-banner.jpg')"
    },
  },
  plugins: [require("daisyui")],
}

