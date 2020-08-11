import React, {useContext} from 'react';
import useSiteMeta from '../../query/useSiteMeta';
import Button from '../Button';

import styles from './styles.module.css';
import {Link} from 'gatsby';
import SwitchMode from '../SwitchMode';
import {StoreContext} from '../../store';

const Footer = () => {
  const {siteMetadata} = useSiteMeta();
  const {state, dispatch} = useContext(StoreContext);

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
          <br />
          <div>
            Mode sombre{' '}
            <SwitchMode
              defaultState={state.theme === 'dark'}
              onChange={s => {
                dispatch({type: 'setTheme', payload: s ? 'dark' : ''});
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
