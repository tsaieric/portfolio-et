/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `/src/assets/images/svg`
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `project-data`,
        // Path to the directory
        path: `${__dirname}/src/data/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `assets`,
        // Path to the directory
        path: `${__dirname}/src/assets`,
      },
    },
  ],
  siteMetadata: {
    title: "ET",
    description: "My portfolio",
    copyright: "Copyright 2023 Eric Tsai",
    logoImg: "./src/assets/images/logo/logo192x192.png",
    menuData: [
      { title: "About", link: "/#About" },
      { title: "Projects", link: "/#Projects" },
      { title: "Career", link: "/#Career" },
      { title: "Contact", link: "/#Contact" },
    ],
  },
};
