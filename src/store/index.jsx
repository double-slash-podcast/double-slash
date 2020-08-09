import React, {createContext, useReducer, useEffect} from 'react';
import Cookies from 'js-cookie';
import {usePodcastsList} from '../query/usePodcastsList';

export const initialState = {
  player: null,
  playerStatus: 'PAUSE',
  current: null,
  podcasts: [],
  podcastEnter: null,
  theme: '',
};

// create context for dispatch
export const StoreContext = createContext(initialState);

const reducer = (state, action) => {
  switch ((state, action.type)) {
    case 'setTheme':
      Cookies.set('theme', action.payload);
      return {...state, ...{theme: action.payload}};
    case 'setPlayer':
      return {...state, ...{player: action.payload}};
    case 'setPodcastEnter':
      return {...state, ...{podcastEnter: action.payload}};
    case 'setPlayerStatus':
      return {...state, ...{playerStatus: action.payload}};
    case 'setPodcasts':
      return {...state, ...{podcasts: action.payload}};
    case 'initCurrent':
      return {
        ...state,
        ...{
          current: state.podcasts.find(
            e => e.node.id === (state.podcastEnter || action.payload),
          ),
        },
      };
    case 'setCurrent':
      return {
        ...state,
        ...{
          current: state.podcasts.find(e => e.node.id === action.payload),
        },
      };
    default:
      return state;
  }
};

const StoreProvider = ({children}) => {
  const {podcastEpisodes} = usePodcastsList();
  const [state, dispatch] = useReducer(reducer, initialState);
  // update state
  useEffect(() => {
    if (podcastEpisodes) {
      dispatch({type: 'setPodcasts', payload: podcastEpisodes.edges});
      dispatch({
        type: 'initCurrent',
        payload: podcastEpisodes.edges[0].node.id,
      });
    }
  }, [podcastEpisodes]);

  // init theme
  useEffect(() => {
    const theme = Cookies.get('theme');
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    if ((userPrefersDark && theme === undefined) || theme === 'dark') {
      dispatch({type: 'setTheme', payload: 'dark'});
    }
  }, []);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
