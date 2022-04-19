const theme = require("tailwindcss/defaultTheme");
const { fontFamily: font } = theme;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', ...font.sans],
        body: ['Source Sans Pro', ...font.sans],
      },
      // NOTE: Tailwind prose plugin ✨
      // https://tailwindcss.com/docs/typography-plugin
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Needs to convert to valid CSS
            // - https://github.com/tailwindlabs/tailwindcss-typography/issues/230
            fontFamily: `'Source Sans Pro', ${theme('fontFamily.sans').join(', ')}`,
            'h1,h2,h3,h4': {
              fontFamily: `'Playfair Display', ${theme('fontFamily.sans').join(', ')}`
            },
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
