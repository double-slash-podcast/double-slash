import React, {createContext, useReducer, useEffect} from 'react';
import {usePodcastsList} from '../query/usePodcastsList';

export const initialState = {
  current: null,
  podcasts: [],
};

// create context for dispatch
export const StoreContext = createContext(initialState);

const reducer = (state, action) => {
  switch ((state, action.type)) {
    case 'setPodcasts':
      return {...state, ...{podcasts: action.payload}};
    case 'setCurrent':
      return {...state, ...{current: action.payload}};
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
      dispatch({type: 'setCurrent', payload: podcastEpisodes.edges[0]});
    }
  }, [podcastEpisodes]);

  return (
    <StoreContext.Provider value={state}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
