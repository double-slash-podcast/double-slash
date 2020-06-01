// const React = require('react');
require('gdpr-cookies/dist/gdpr-cookies.css');
const initGdprCookie = require('gdpr-cookies/dist/gdpr-cookies');

/**
 * init
 */
exports.onInitialClientRender = (_, pluginOptions = {}) => {
  const _options = {
    ...{
      defaultLang: 'en',
    },
    ...pluginOptions,
  };

  // load after for keep callback
  window.onload = () => {
    initGdprCookie.default(_options.defaultLang);
  };
};
