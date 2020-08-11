import React from 'react';
import {Helmet} from 'react-helmet';
import useSiteMeta from '../../query/useSiteMeta';
import {getSocialImage} from '../../helpers/getSocial';

const SEO = ({description, meta, title, withSocial}) => {
  const {siteMetadata} = useSiteMeta();
  const {titleDefault, descriptionDefault, siteName} = siteMetadata;
  const _lang = 'fr';
  const _meta = [];

  // generate social image
  if (withSocial === true) {
    const twitter = getSocialImage({
      title: title || titleDefault,
      size: 'twitter',
    });
    _meta.push({name: 'twitter:image', content: twitter});
  }

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
            property: `og:title`,
            content: title || titleDefault,
          },
          {
            property: `og:description`,
            content: description || descriptionDefault,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
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
