const podcastInfo = require("./src/podcast-infos")

module.exports = {
  siteMetadata: {
    titleDefault: "Double Slash Podcast",
    descriptionDefault:
      "Le podcast dédié aux outils et aux techniques pour le développement web moderne",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: podcastInfo,
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1100,
            },
          },
        ],
      },
    },
  ],
}
