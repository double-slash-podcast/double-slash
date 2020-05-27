import {useStaticQuery, graphql} from 'gatsby';

const useSiteMeta = () => {
  const {site} = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          titleDefault
          siteName
          descriptionDefault
        }
      }
    }
  `);
  return site;
};

export default useSiteMeta;
