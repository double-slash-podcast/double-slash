import React from 'react';
import {WrapRootElement} from '../mdx';
import Header from '../Header';
import Footer from '../Footer';
import SEO from '../Seo';

import './global.css';
import styles from './styles.module.css';

const Layout = ({children}) => {
  return (
    <>
      <WrapRootElement>
        <SEO />
        <Header />
        <div className={styles.content}>
          <div className={styles.main_content}>
            <main className={styles.main}>{children}</main>
          </div>
        </div>
        <Footer />
      </WrapRootElement>
    </>
  );
};

export default Layout;
