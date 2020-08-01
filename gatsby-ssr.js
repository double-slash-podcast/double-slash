const React = require('react');
const Layout = require('./src/components/Layout').default;
const {default: StoreProvider} = require('./src/store');
exports.wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>;
};

/**
 * wrapp app with provider for dispatch cart and customer infos
 */
exports.wrapRootElement = ({element}) => {
  return <StoreProvider>{element}</StoreProvider>;
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
