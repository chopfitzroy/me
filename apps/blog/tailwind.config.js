const theme = require("tailwindcss/defaultTheme");
const { fontFamily: font } = theme;

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Quattrocento', ...font.sans],
        heading: ['Oswald', ...font.sans],
      },
      // NOTE: Tailwind prose plugin ✨
      // https://tailwindcss.com/docs/typography-plugin
      typography: (theme) => ({
        DEFAULT: {
          css: {
            // Needs to convert to valid CSS
            // - https://github.com/tailwindlabs/tailwindcss-typography/issues/230
            fontFamily: `'Quattrocento', ${theme('fontFamily.sans').join(', ')}`,
            'h1,h2,h3,h4': {
              fontFamily: `'Oswald', ${theme('fontFamily.sans').join(', ')}`
            },
          }
        },
        dark: {
          css: {
            color: theme('colors.slate.200'),
            'h1,h2,h3,h4': {
              color: theme('colors.slate.200'),
            }
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
