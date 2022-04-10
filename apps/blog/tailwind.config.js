module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // NOTE: Tailwind prose plugin ✨
      // https://tailwindcss.com/docs/typography-plugin
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // TODO...
            // - Add overrides for things like links here
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
