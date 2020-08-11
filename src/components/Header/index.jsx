import React, {useContext} from 'react';
import useSiteMeta from '../../query/useSiteMeta';
import {Link} from 'gatsby';

import styles from './styles.module.css';
import {StoreContext} from '../../store';
import SwitchMode from '../SwitchMode';

const Header = () => {
  const {siteMetadata} = useSiteMeta();
  const {state, dispatch} = useContext(StoreContext);

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.topbar}>
          <SwitchMode
            defaultState={state.theme === 'dark'}
            onChange={s => {
              dispatch({type: 'setTheme', payload: s ? 'dark' : ''});
            }}
          />
        </div>
        <Link to="/" className={styles.header_title}>
          {siteMetadata.titleDefault}
        </Link>
        <strong className={styles.header_baseline}>
          {siteMetadata.descriptionDefault}
        </strong>
        <div className={styles.logo}>
          <span>{'//'}</span>
          <span>{'.'}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
