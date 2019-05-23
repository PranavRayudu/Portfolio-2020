/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Taraka Pranav's Portfolio`,
    url: "https://tarakapranav.netlify.com/",
    description: `A redesigned portfolio for Pranav Rayudu using Gatsby.js and react`,
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Taraka Pranav's Portfolio`,
        short_name: `Pranav's Portfolio`,
        icon: `content/images/logo-blue.png`, // This path is relative to the root of the site.
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#80deea`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ],
}
