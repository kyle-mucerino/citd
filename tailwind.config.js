/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue,svelte}", "./**/*.{liquid,json}"],
  theme: {
    extend: {
      keyframes: {
        colorCycle: {
          "0%, 100%": { background: "linear-gradient(to left, #f00, #ff0)" },
          "50%": { background: "linear-gradient(to left, #ff0, #f00)" }
        }
      },
      animation: {
        colorCycle: "colorCycle 2s infinite"
      }
    }
  },
  plugins: []
};
