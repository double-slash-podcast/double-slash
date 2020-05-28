/* eslint "react/jsx-no-target-blank": "off" */

import React from 'react';
import Img from 'gatsby-image';
import {useAuthorsList} from '../../query/useAuthorsList';

import styles from './styles.module.css';

const Authors = () => {
  const {mainAuthors} = useAuthorsList();
  return (
    <div className={styles.authors}>
      {mainAuthors.edges.map(({node}) => {
        const {name, twitter, website, image} = node;
        const twname = twitter
          ? twitter.substring(twitter.lastIndexOf('/') + 1)
          : '';
        const wurl = website ? website.replace('https://', '') : '';
        return (
          <div key={name} className={styles.author}>
            <div className={styles.info}>
              <strong>{name}</strong>
              <a href={twitter} target="_blank">
                {`@${twname}`}
              </a>
              <a href={website} target="_blank">
                {wurl}
              </a>
            </div>
            <div className={styles.image}>
              <Img fixed={image.childImageSharp.fixed} alt={name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Authors;
