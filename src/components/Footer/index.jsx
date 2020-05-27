import React from 'react';
import useSiteMeta from '../../query/useSiteMeta';

import styles from './styles.module.css';
import {Link} from 'gatsby';

const Footer = () => {
  const {siteMetadata} = useSiteMeta();
  return (
    <footer>
      <div className={styles.footer_container}>
        <div>
          {new Date().getFullYear()} {siteMetadata.titleDefault} <br />
          Tous les droits sont réservés.
        </div>
        <div>
          <Link to="/contact/">Contactez-nous</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
