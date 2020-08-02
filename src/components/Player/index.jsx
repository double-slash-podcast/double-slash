/* eslint jsx-a11y/media-has-caption:0 */
import React, {useLayoutEffect, useRef, useContext} from 'react';
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
  const {state, dispatch} = useContext(StoreContext);
  const player = useRef(null);
  const instance = useRef(null);
  const {current} = state;
  useLayoutEffect(() => {
    if (window.Plyr && current) {
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
        // play only after user action
        instance.current.play();
      } else {
        instance.current = new window.Plyr(player.current, {
          // debug: true,
        });
        instance.current.source = source;
        // set player in store :)
        dispatch({type: 'setPlayer', payload: instance.current});
        // listen status player for store state status
        instance.current.on('ready', event => {
          // attach event on play
          instance.current.on('playing', event => {
            dispatch({type: 'setPlayerStatus', payload: 'PLAY'});
          });
          instance.current.on('pause', event => {
            dispatch({type: 'setPlayerStatus', payload: 'PAUSE'});
          });
        });
      }
    }
  }, [current, dispatch]);

  if (!state.current) {
    return (
      <div className={styles.player}>
        <Loader />
      </div>
    );
  }
  const {frontmatter} = state.current.node;
  const {slug} = state.current.node.fields;
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
