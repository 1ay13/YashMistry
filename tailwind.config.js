/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily: {
      altone: ["altone", "sans-serif"],
      bristone: ["bristone", "sans-serif"],
    },
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tw-elements/dist/plugin"),
  ],
};
