/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Taraka Pranav's Portfolio`,
    url: "https://pranavrayudu.netlify.com/",
    siteUrl: "https://pranavrayudu.netlify.com/",
    description: `A redesigned portfolio for Pranav Rayudu using Gatsby.js`,
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
        background_color: `#212121`,
        theme_color: `#80deea`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        selector: '[data-sal]', // Selector of the elements to be animated
        animateClassName: 'sal-animate', // Class name which triggers animation
        disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        enterEventName: 'sal:in', // Enter event name
        exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ],
}
