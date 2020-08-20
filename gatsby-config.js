const podcastInfo = require('./src/podcast-infos');

module.exports = {
  siteMetadata: {
    siteUrl: `https://slash-podcast.fr`,
    siteName: 'Double Slash Podcast',
    titleDefault: 'Double Slash',
    imageDefault:
      'https://res.cloudinary.com/doubleslash/image/upload/v1597260128/doubleSlashDefault_kyl8s9.png',
    descriptionDefault:
      'Le podcast sur le code, le développement web et les outils modernes. SEO, JAMStack, Javascript, Wordpress, Git, Écoconception...',
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
    `gatsby-plugin-preact`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          'https://use.typekit.net',
          'https://p.typekit.net',
          'https://cdn.plyr.io',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          families: ['mono45-headline', 'nunito'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        // printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        // tailwind: true, // Enable tailwindcss support
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: [
          'src/components/Layout/global.css',
          'prismjs/',
          'gdpr-cookies/',
        ], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [``, `/contact`, `/podcasts/*`],
      },
    },
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
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        defaultLang: 'fr',
        options: {
          keepCookies: ['theme'],
        },
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-168148177-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Double Slash Podcast`,
        short_name: `Double Slash`,
        start_url: `/`,
        background_color: `#ffd800`,
        theme_color: `#a700ff`,
        display: `standalone`,
        icon: `static/double-slash.png`,
      },
    },
  ],
};
