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
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `project-data`,
        // Path to the directory
        path: `${__dirname}/src/data/projects`,
      },
    },
  ],
  siteMetadata: {
    title: "Eric Tsai",
    description: "My portfolio",
    copyright: "Copyright 2023 Eric Tsai",
  },
};
