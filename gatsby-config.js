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
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
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
    title: "Eric Tsai",
    description: "My portfolio",
    copyright: "Copyright 2023 Eric Tsai",
    menuData: [
      { title: "About", link: "/about" },
      { title: "Projects", link: "/projects" },
      { title: "Career", link: "/career" },
    ],
  },
};
