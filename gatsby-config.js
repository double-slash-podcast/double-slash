/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
      options: {
        title: `Double Slash`,
        subtitle: `Podcast sur le développement web`,
        description: `description.....`,
        summary: `Le podcast dédié aux outils et aux techniques pour le développement web`,
        podcastType: `episodic`,
        siteUrl: `https://www.slash-podcast.fr`,
        imageUrl: `https://www.slash-podcast.fr/double-slash.png`,
        feedUrl: `https://www.slash-podcast.fr/pocast-rss-feed.xml`,
        language: `fr-FR`,
        copyright: `Copyright © 2020 Some Owner`,
        authorName: `The Author`,
        ownerName: `The Owner`,
        ownerEmail: `owner@podcast.com`,
        managingEditor: `editor@podcast.com`,
        webMaster: `support@podcast.com`,
        explicit: `no`,
        publicationDate: `April 30, 2020 10:00:00 GMT`,
        category1: `Technology`,
        subCategory1: `Books`,
        timeToLive: `60`,
        outputPath: `/podcast-rss-feed.xml`,
      },
    },
  ],
}
