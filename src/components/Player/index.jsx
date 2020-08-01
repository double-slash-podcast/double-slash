import React, {useEffect, useRef, useContext} from 'react';
import Loader from '../Loader';
import {StoreContext} from '../../store';
import {Link} from 'gatsby';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Player = () => {
  const {state} = useContext(StoreContext);
  const player = useRef(null);
  const instance = useRef(null);
  // load player only if has visible
  // const [playerHidden, setPlayerHidden] = useState(true);
  useEffect(() => {
    if (window.Plyr && state) {
      const {current} = state;
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
      if (instance.current !== null) {
        instance.current.source = source;
        instance.current.restart();
      } else {
        instance.current = new window.Plyr(player.current, {
          // debug: true,
        });
        instance.current.source = source;
      }
    }
  }, [state]);
  console.log(state);

  if (!state.current) {
    return (
      <div className={styles.player}>
        <Loader />
      </div>
    );
  }
  const {frontmatter, slug} = state.current.node;
  const d = new Date(frontmatter.publicationDate);
  return (
    <div className={styles.player}>
      <div className={styles.episode_infos}>
        <p className={styles.episode_title}>
          <Link to={slug}>
            <span>{'//'}</span>
            <span>{'.'}</span>
            <span>
              {frontmatter.episodeNumber}
              {' - '}
              {frontmatter.title}
            </span>
          </Link>
        </p>
        <strong>{d.toLocaleDateString('fr-FR', options)}</strong>
      </div>
      <audio
        preload="none"
        ref={player}
        controls
        style={{
          display: 'none',
        }}
      >
        <source src={frontmatter.url} type="audio/mp3" />
      </audio>
    </div>
  );
};

export default Player;
