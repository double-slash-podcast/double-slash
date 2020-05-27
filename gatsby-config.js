const podcastInfo = require('./src/podcast-infos');

module.exports = {
  siteMetadata: {
    siteUrl: `https://slash-podcast.fr`,
    siteName: 'Double Slash Podcast',
    titleDefault: 'Double Slash',
    descriptionDefault:
      'Le podcast sur le code, le développement web et les outils modernes.',
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
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
    `gatsby-transformer-yaml`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
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
};
