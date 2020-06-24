/* eslint "jsx-a11y/media-has-caption": 0 */
import React, {useRef, useEffect, useState} from 'react';
import {Link} from 'gatsby';
import Loader from '../Loader';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Episode = ({node}) => {
  const [playerHidden, setPlayerHidden] = useState(true);
  const player = useRef(null);
  const {frontmatter, excerpt, fields} = node;
  const {title, id, url, episodeNumber, publicationDate} = frontmatter;
  const d = new Date(publicationDate);
  const {slug} = fields;
  useEffect(() => {
    if (window.Plyr) {
      setTimeout(() => {
        new window.Plyr(player.current);
        setPlayerHidden(false);
      }, 500);
    }
  }, []);
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
        <audio
          preload="none"
          ref={player}
          controls
          style={{
            visibility: `${playerHidden === true ? 'hidden' : 'visible'}`,
            height: `${playerHidden === true ? '0px' : 'auto'}`,
          }}
        >
          <source src={url} type="audio/mp3" />
        </audio>
        <Loader
          style={{
            visibility: `${playerHidden === false ? 'hidden' : 'visible'}`,
          }}
        />
      </div>
    </div>
  );
};

export default Episode;
