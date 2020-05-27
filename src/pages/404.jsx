import React from 'react';

import styles from '../templates/pages/styles.module.css';
import {useStaticQuery, graphql, Link} from 'gatsby';

const Page404 = ({children}) => {
  const {allSitePage} = useStaticQuery(graphql`
    query allPages {
      allSitePage(
        filter: {path: {regex: "/^((?!404).)*$/"}}
        sort: {fields: path, order: ASC}
      ) {
        nodes {
          path
        }
      }
    }
  `);
  return (
    <div className={styles.page}>
      <h1>404 Désolé, page non trouvée !!</h1>
      <div>
        <p>Voici les pages disponibles sur le site :</p>
        <ul>
          {allSitePage.nodes.map(p => (
            <li>
              <Link to={p.path}>{p.path}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page404;
