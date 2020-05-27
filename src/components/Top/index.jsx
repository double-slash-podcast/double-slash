import React from 'react';
import Authors from '../Authors';
import Repositories from '../Repository';

import styles from './styles.module.css';

const Top = () => (
  <div className={styles.top}>
    <Authors />
    <Repositories />
  </div>
);

export default Top;
