/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue,svelte}", "./**/*.{liquid,json}"],
  theme: {
    extend: {
      keyframes: {
        colorCycle: {
          "0%, 100%": {
            background: "linear-gradient(to left, #fe8c00,#f83600)"
          },
          "50%": { background: "linear-gradient(to right, #fe8c00,#f83600)" }
        }
      },
      animation: {
        colorCycle: "colorCycle 2s infinite"
      },
      screens: {
        custom: "1194px",
        tiny: "490px",
        smallish: "530px",
        mobile1: "556px",
        teenie: "375px"
      }
    }
  },
  plugins: []
};
