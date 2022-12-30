/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
 require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Gatsby Airtable Default Starter`,
    description: `This project uses Gatsby and the Airtable API to create a dynamic website that displays data stored in an Airtable database`,
    author: `@kiri231`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  pathPrefix: "/Gastby-airtable-getting-started",
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID, 
            tableName: process.env.AIRTABLE_TABLE_NAME,
          }
        ]
      },
    },
  ],
}
