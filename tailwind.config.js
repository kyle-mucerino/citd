/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue,svelte}", "./**/*.{liquid,json}"],
  theme: {
    extend: {
      // fontFamily: {
      //   heading: 'var(--font-heading-family)',
      //   body: 'var(--font-body-family)'
      // },
      // fontSize: {
      //   sm: ['var(--font-size-sm)', '1.428'],
      //   base: ['var(--font-size-base)', '1.5'],
      //   lg: ['var(--font-size-lg)', '1.555'],
      //   xl: ['var(--font-size-xl)', '1.4']
      // },
      colors: {
        willy_red: "var(--color-willy-red)",
        willy_gray: "var(--color-willy-gray)",
        willy_gray_text: "var(--color-willy-gray)"
      }
      // transitionTimingFunction: {
      //   wiggle: 'cubic-bezier(0.22, 1, 0.36, 1)'
      // }
    }
  }
};
