/* eslint "jsx-a11y/media-has-caption": 0 */
import React, {useContext} from 'react';
import {Link} from 'gatsby';
import {StoreContext} from '../../store';
import {secondToTime} from '../../helpers/time';
import Pause from '../Pause';
import Play from '../Play';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Episode = ({node}) => {
  const {state, dispatch} = useContext(StoreContext);
  const {frontmatter, excerpt, fields, id} = node;
  const {title, episodeNumber, duration, publicationDate} = frontmatter;
  const d = new Date(publicationDate);
  const isOnAir = state.current ? id === state.current.node.id : false;
  const {playerStatus} = state;
  const {slug} = fields;

  const setEpisode = () => {
    dispatch({
      type: 'setCurrent',
      payload: id,
    });
    if (state.player && state.playerStatus === 'PLAY') {
      state.player.pause();
    } else if (state.player && state.playerStatus === 'PAUSE') {
      state.player.play();
    }
  };
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
          className={`${styles.button_play} ${
            playerStatus === 'PLAY' ? styles.PLAY : styles.PAUSE
          }`}
          onClick={setEpisode}
          aria-label="Ecouter le podcast"
        >
          {isOnAir && playerStatus === 'PLAY' ? <Pause /> : <Play />}
        </button>
        <span>{`Épisode "${title}". Durée : ${secondToTime(duration)}`}</span>
      </div>
    </div>
  );
};

export default Episode;
