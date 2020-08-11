import React, {useContext} from 'react';
import {WrapRootElement} from '../mdx';
import Header from '../Header';
import Footer from '../Footer';
import Player from '../Player';
import SEO from '../Seo';

import './global.css';
import styles from './styles.module.css';
import {Helmet} from 'react-helmet';
import {StoreContext} from '../../store';

const Layout = ({children}) => {
  const {state} = useContext(StoreContext);
  return (
    <>
      <WrapRootElement>
        <Helmet
          bodyAttributes={{
            'data-theme': state.theme,
          }}
        />
        <SEO />
        <Header />
        <div className={styles.content}>
          <div className={styles.main_content}>
            <main className={styles.main}>{children}</main>
          </div>
        </div>
        <Footer />
        <Player />
      </WrapRootElement>
    </>
  );
};

export default Layout;
