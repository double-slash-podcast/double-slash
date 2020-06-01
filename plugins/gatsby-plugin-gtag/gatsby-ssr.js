const React = require('react');

const GTAG_SRC = `https://www.googletagmanager.com/gtag/js`;

exports.onRenderBody = (
  {setHeadComponents, setPostBodyComponents},
  pluginOptions,
) => {
  const isPluginEnabled =
    stringToBool(process.env.GATSBY_GTAG_DEBUG) ||
    process.env.NODE_ENV === 'production';

  // tracking id defined
  if (!pluginOptions.trackingId || !isPluginEnabled) {
    return null;
  }

  // anonymous data
  const anonymize = pluginOptions.anonymize || false;

  // script gtag
  // const gtagScript = (
  //   <script
  //     async
  //     key="gatsby-plugin-gtag-gtag-js"
  //     src={`${GTAG_SRC}?id=${pluginOptions.trackingId}`}
  //   />
  // );

  // add gdpr-cookie script
  const scriptStr = `
    window.GATSBY_GTAG_PLUGIN_GA_TRACKING_ID = (
      '${pluginOptions.trackingId}'
    );
    window.GATSBY_GTAG_PLUGIN_ANONYMIZE = ${anonymize};

    var options = {
      send_page_view: false
    };
    if (${anonymize}) {
      options.anonymize_ip = true;
    }

    // push gtags with gdpr cookies
    _gdpr.push([
      {
        type: 'stats',
        name: 'Google Tags',
        description: 'Service pour les statistiques de visites'
      },
        [
          function(helpers) {
            // use helpers
            helpers.createScript('https://www.googletagmanager.com/gtag/js?id=' + '${pluginOptions.trackingId}');

            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments)
            }
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${pluginOptions.trackingId}', options);
          }
        ]
      ]);
  `;
  const trackScript = (
    <script
      key="gatsby-plugin-gtag-inline-script"
      dangerouslySetInnerHTML={{__html: scriptStr}}
    />
  );

  const setComponents = pluginOptions.head
    ? setHeadComponents
    : setPostBodyComponents;

  return setComponents([trackScript]);
};

function stringToBool(s) {
  if (!s) {
    return false;
  }

  const sNorm = s.trim().toLowerCase();
  if (!sNorm.length) {
    return false;
  }

  return sNorm === 'true' || sNorm === '1';
}
