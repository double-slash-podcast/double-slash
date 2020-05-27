const React = require('react');
const Layout = require('./src/components/Layout').default;
exports.wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>;
};

/**
 * insert script, style and tag in body on ssr render
 */
exports.onRenderBody = ({setPostBodyComponents}, pluginOptions = {}) => {
  const components = [
    <script key="plyr-script" src="https://cdn.plyr.io/3.6.2/plyr.js"></script>,
  ];
  // <link rel="stylesheet" href="https://cdn.plyr.io/3.6.2/plyr.css" />,

  return setPostBodyComponents(components);
};
