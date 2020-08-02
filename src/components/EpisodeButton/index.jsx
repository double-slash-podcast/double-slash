import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {StoreContext} from '../../store';
import Pause from './Pause';
import Play from './Play';

import styles from './styles.module.css';

const EpisodeButton = ({id}) => {
  const {state, dispatch} = useContext(StoreContext);
  const isOnAir = state.current ? id === state.current.node.id : false;
  const {playerStatus} = state;

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
    <button
      className={`${styles.button_play} ${
        isOnAir && playerStatus === 'PLAY' ? styles.PLAY : styles.PAUSE
      }`}
      onClick={setEpisode}
      aria-label="Ecouter l'épisode"
    >
      {isOnAir && playerStatus === 'PLAY' ? <Pause /> : <Play />}
    </button>
  );
};

EpisodeButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EpisodeButton;
