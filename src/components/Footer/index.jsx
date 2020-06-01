import React from 'react';
import useSiteMeta from '../../query/useSiteMeta';
import Button from '../Button';

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
        <div className={styles.links}>
          <Link to="/contact/">Contactez-nous</Link>
          <Button
            mode="link"
            onClick={e => {
              e.preventDefault();
              window._gdpr_showModal();
            }}
          >
            Préférences des cookies
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
