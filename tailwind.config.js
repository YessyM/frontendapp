/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: false,
  },
}