const React = require('react');

/**
 * insert script
 */
exports.onRenderBody = ({setPostBodyComponents}, pluginOptions = {}) => {
  const _options = {
    ...{
      defaultLang: 'en',
      options: {},
    },
    ...pluginOptions,
  };

  const _gdpr_options = {
    ...{
      name: 'gdpr_cookie', // name of cookie gdpr
      keepCookies: [], // cookie not to delete
      types: ['ads', 'stats', 'others'], // type of services
      expires: 395, // cookie duration (in days)
    },
    ..._options.options,
  };

  const components = [
    // insert script
    <script
      key="gdpr-script"
      dangerouslySetInnerHTML={{
        __html: `
      var _gdpr = _gdpr || [];
      var _gdpr_options = ${JSON.stringify(_gdpr_options)}
      ${
        _options.messages
          ? `var _gdpr_messages = ${JSON.stringify(_options.messages)}
      `
          : ''
      }
      `,
      }}
    />,
  ];

  return setPostBodyComponents(components);
};
