import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMeta from '../../query/useSiteMeta';
// import { getSocialImage } from '../../helpers/getSocial';





const SEO = ({ description, meta, title, withSocial, episode }) => {
  const socialImageParams = {
    cloudName: 'doubleslash',
    color: 'a700ff',
    episode
  }
  const socialImageUrl = `https://res.cloudinary.com/${socialImageParams.cloudName}/image/upload/co_rgb:${socialImageParams.color},g_east,l_text:mono.otf_120_letter_spacing_-5:%23${socialImageParams.episode},x_54/co_rgb:${socialImageParams.color},g_east,l_text:mono.otf_120_letter_spacing_-5:${title},x_54,y_150/v1597238012/FACEBOOK_-_OG_Card_RAW_eu5xdv.png`
  const { siteMetadata } = useSiteMeta();
  const { titleDefault, descriptionDefault, siteName } = siteMetadata;
  const _lang = 'fr';
  const _meta = [];

  // generate social image
  // if (withSocial === true) {
  //   const twitter = getSocialImage({
  //     title: title || titleDefault,
  //     size: 'twitter',
  //   });
  //   _meta.push({ name: 'twitter:image', content: twitter });
  // }

  return (
    <Helmet
      htmlAttributes={{
        lang: _lang,
      }}
      title={`${title || titleDefault} | ${siteName}`}
      meta={[
        ...[
          {
            name: `description`,
            content: description || descriptionDefault,
          },
          {
            name: `image`,
            content: socialImageUrl,
          },
          {
            property: `og:title`,
            content: title || titleDefault,
          },
          {
            property: `og:description`,
            content: description || descriptionDefault,
          },
          {
            property: `og:image`,
            content: socialImageUrl,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            property: `twitter:image`,
            content: socialImageUrl,
          },
          // {
          //   name: `twitter:creator`,
          //   content: author,
          // },
          {
            name: `twitter:title`,
            content: title || titleDefault,
          },
          {
            name: `twitter:description`,
            content: description || descriptionDefault,
          },
        ],
        ..._meta,
      ].concat(meta)}
    ></Helmet>
  );
};

// <link rel="dns-prefetch" href="//cdn.plyr.io/" />
// <link rel="preconnect" href="https://cdn.plyr.io/" crossorigin />
// <link rel="dns-prefetch" href="//use.typekit.net/" />
// <link rel="preconnect" href="https://use.typekit.net/" crossorigin />
// <link rel="dns-prefetch" href="//p.typekit.net/" />
// <link rel="preconnect" href="https://p.typekit.net/" crossorigin />
SEO.defaultProps = {
  meta: [],
  description: ``,
  withSocial: false,
};

export default SEO;
