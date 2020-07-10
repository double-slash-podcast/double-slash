import React, {useEffect, useRef, useState, useContext} from 'react';
import Loader from '../Loader';
import {StoreContext} from '../../store';

import styles from './styles.module.css';
import {Link} from 'gatsby';

const Player = () => {
  const {current} = useContext(StoreContext);
  const player = useRef(null);
  const instance = useRef(null);
  // load player only if has visible
  const [playerHidden, setPlayerHidden] = useState(true);
  useEffect(() => {
    if (window.Plyr && playerHidden && current !== null) {
      if (instance.current) {
        instance.current.destroy();
      }
      instance.current = new window.Plyr(player.current);
      setPlayerHidden(false);
    }
  }, [playerHidden, current]);
  return (
    <div className={styles.player}>
      {current.node && (
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
      )}
      <audio
        preload="none"
        ref={player}
        controls
        style={{
          visibility: `${playerHidden === true ? 'hidden' : 'visible'}`,
          height: `${playerHidden === true ? '0px' : 'auto'}`,
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
