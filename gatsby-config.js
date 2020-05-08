const podcastInfo = require("./src/podcast-infos")

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-podcast-feed-mdx`,
      options: podcastInfo,
    },
  ],
}
