/* eslint "jsx-a11y/media-has-caption": 0 */
import React from 'react';
import {Link} from 'gatsby';
import {secondToTime} from '../../helpers/time';
import EpisodeButton from '../EpisodeButton';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Episode = ({node}) => {
  const {frontmatter, excerpt, fields, id} = node;
  const {title, episodeNumber, duration, publicationDate} = frontmatter;
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
        <EpisodeButton id={id} />
        <span>
          {`Épisode "${title}"`}
          <br />
          {`Durée : ${secondToTime(duration)}`}
        </span>
      </div>
    </div>
  );
};

export default Episode;
