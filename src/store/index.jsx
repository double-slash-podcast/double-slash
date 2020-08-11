import React, {createContext, useReducer, useEffect} from 'react';
import Cookies from 'js-cookie';
import {usePodcastsList} from '../query/usePodcastsList';

const userPrefersDark = () =>
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

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
  const {theme} = state;
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

  // init theme with prefere-color-sheme or cookie
  useEffect(() => {
    const _theme = Cookies.get('theme');
    if (userPrefersDark() || _theme === 'dark') {
      dispatch({type: 'setTheme', payload: 'dark'});
    }
  }, []);

  // save theme on change
  useEffect(() => {
    Cookies.set('theme', theme);
  }, [theme]);

  // listen change prefers-color-scheme
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addListener(() => {
      console.log('change');
      dispatch({type: 'setTheme', payload: userPrefersDark() ? 'dark' : ''});
    });
  }, []);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
