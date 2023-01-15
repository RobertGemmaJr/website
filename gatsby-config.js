/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
// gatsby-config.js

module.exports = {
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true, // Use `<CSSReset />
        isUsingColorMode: true, // Use <ColorModeProvider />
        isBaseProvider: false, // Render `<ChakraBaseProvider>`
      },
    },
  ],
}