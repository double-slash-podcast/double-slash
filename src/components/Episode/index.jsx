/* eslint "jsx-a11y/media-has-caption": 0 */
import React, {useRef, useEffect, useState} from 'react';
import useIsInViewport from 'use-is-in-viewport';
import {Link} from 'gatsby';
import Loader from '../Loader';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Episode = ({node}) => {
  const player = useRef(null);
  // load player only if has visible
  const [isInViewport, playerContainer] = useIsInViewport({threshold: 100});
  const [playerHidden, setPlayerHidden] = useState(true);
  const {frontmatter, excerpt, fields} = node;
  const {title, id, url, episodeNumber, publicationDate} = frontmatter;
  const d = new Date(publicationDate);
  const {slug} = fields;
  useEffect(() => {
    if (window.Plyr && isInViewport && playerHidden) {
      new window.Plyr(player.current);
      setPlayerHidden(false);
    }
  }, [isInViewport, playerHidden]);
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
      <div ref={playerContainer} className={styles.player}>
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
