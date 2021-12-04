import React from 'react';
import styles from './styles.module.css';

const BlocBorder = ({children}) => (
  <div className={styles.bloc_border}>{children}</div>
);

export default BlocBorder;
