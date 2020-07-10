/* eslint "jsx-a11y/media-has-caption": 0 */
import React, {useContext} from 'react';
import {Link} from 'gatsby';
import {StoreContext} from '../../store';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Episode = ({node}) => {
  const {dispatch} = useContext(StoreContext);

  const {frontmatter, excerpt, fields, id} = node;
  const {title, episodeNumber, publicationDate} = frontmatter;
  const d = new Date(publicationDate);
  const {slug} = fields;
  return (
    <div className={styles.episode} key={id}>
      <div className={styles.header}>
        <h2 className={styles.episode_title}>
          <Link to={slug}>
            <span>{'//'}</span>
            <span>{'.'}</span>
            <span>
              {episodeNumber}
              {' - '}
              {title}
            </span>
          </Link>
        </h2>
        <strong>{d.toLocaleDateString('fr-FR', options)}</strong>
      </div>
      <div className={styles.episode_info}>
        <p>{excerpt}</p>
        <Link className={styles.link} title={title} to={slug}>
          Voir les notes de l'épisode
        </Link>
      </div>
      <div className={styles.player}>
        <button
          onClick={() =>
            dispatch({
              type: 'setCurrent',
              payload: id,
            })
          }
        >
          Ecouter le podcast
        </button>
      </div>
    </div>
  );
};

export default Episode;
