const React = require('react');
const {default: StoreProvider} = require('./src/store');
const Layout = require('./src/components/Layout').default;

/**
 * wrapp app with provider for dispatch cart and customer infos
 */
exports.wrapRootElement = ({element}) => {
  return <StoreProvider>{element}</StoreProvider>;
};

exports.wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>;
};
