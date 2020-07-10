import React, {useEffect, useRef, useState, useContext} from 'react';
import Loader from '../Loader';
import {StoreContext} from '../../store';

import styles from './styles.module.css';
import {Link} from 'gatsby';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Player = () => {
  const {state} = useContext(StoreContext);
  const {current} = state;
  const player = useRef(null);
  const instance = useRef(null);
  // load player only if has visible
  const [playerHidden, setPlayerHidden] = useState(true);
  useEffect(() => {
    if (window.Plyr && current !== null) {
      const source = {
        type: 'audio',
        title: current.node.frontmatter.title,
        sources: [
          {
            src: current.node.frontmatter.url,
            type: 'audio/mp3',
          },
        ],
      };
      if (instance.current !== null && playerHidden === false) {
        instance.current.source = source;
        instance.current.restart();
      } else {
        instance.current = new window.Plyr(player.current, {
          // debug: true,
        });
        instance.current.source = source;
        setPlayerHidden(false);
      }
    }
  }, [playerHidden, current]);
  const d = new Date(current.node.frontmatter.publicationDate);
  return (
    <div className={styles.player}>
      {current.node && (
        <div className={styles.episode_infos}>
          <p className={styles.episode_title}>
            <Link to={current.node.slug}>
              <span>{'//'}</span>
              <span>{'.'}</span>
              <span>
                {current.node.frontmatter.episodeNumber}
                {' - '}
                {current.node.frontmatter.title}
              </span>
            </Link>
          </p>
          <strong>{d.toLocaleDateString('fr-FR', options)}</strong>
        </div>
      )}
      <audio
        preload="none"
        ref={player}
        controls
        style={{
          display: `${playerHidden === false ? 'none' : ''}`,
        }}
      >
        <source
          src={current.node ? current.node.frontmatter.url : null}
          type="audio/mp3"
        />
      </audio>
      <Loader
        style={{
          visibility: `${playerHidden === false ? 'hidden' : 'visible'}`,
          height: `${playerHidden === false ? '0px' : 'auto'}`,
        }}
      />
    </div>
  );
};

export default Player;
