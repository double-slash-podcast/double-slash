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
    <script
      key="plyr-script"
      async
      src="https://cdn.plyr.io/3.6.2/plyr.js"
    ></script>,
    <script
      key="passive-event-script"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `document.addEventListener('touchstart', onTouchStart, {passive: true});`,
      }}
    />,
  ];
  // <link rel="stylesheet" href="https://cdn.plyr.io/3.6.2/plyr.css" />,

  return setPostBodyComponents(components);
};
