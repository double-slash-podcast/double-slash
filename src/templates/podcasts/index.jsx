/* eslint "jsx-a11y/media-has-caption": 0 */
import React, {useContext, useEffect} from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';
import SEO from '../../components/Seo';
import BreadCrumb from '../../components/Breadcrumb';
import {StoreContext} from '../../store';
import Pause from '../../components/Pause';
import Play from '../../components/Play';
import {secondToTime} from '../../helpers/time';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Podcast = ({data, location}) => {
  const {state, dispatch} = useContext(StoreContext);
  const {mdx} = data;
  const {frontmatter, id} = mdx;
  const {
    title,
    subtitle,
    episodeNumber,
    duration,
    publicationDate,
  } = frontmatter;
  const isOnAir = state.current ? id === state.current.node.id : false;
  const {playerStatus} = state;
  const d = new Date(publicationDate);

  useEffect(() => {
    if (!state.podcastEnter) {
      dispatch({
        type: 'setPodcastEnter',
        payload: id,
      });
    }
  }, [id, state, dispatch]);

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
    <>
      <SEO
        title={title}
        description={subtitle && subtitle !== '' ? subtitle : mdx.excerpt}
      />
      <div className={styles.episode}>
        <BreadCrumb location={location} title={title} />

        <h1 className={styles.title}>
          <span>{'//'}</span>
          <span>{'.'}</span>
          <span>
            {episodeNumber}
            {' - '}
            {title}
          </span>
        </h1>
        <div className={styles.episode_info}>
          <strong>{d.toLocaleDateString('fr-FR', options)}</strong>
        </div>
        <div className={styles.player}>
          <button
            className={`${styles.button_play} ${
              playerStatus === 'PLAY' ? styles.PLAY : styles.PAUSE
            }`}
            onClick={setEpisode}
            aria-label="Écouter le podcast"
          >
            {isOnAir && playerStatus === 'PLAY' ? <Pause /> : <Play />}
          </button>
          <span>{`Épisode "${title}". Durée : ${secondToTime(duration)}`}</span>
        </div>
        <div className={styles.notes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </div>
    </>
  );
};

export default Podcast;

export const query = graphql`
  query PodcatsQuery($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        subtitle
        publicationDate
        url
        duration
        season
        episodeNumber
      }
      id
      body
      excerpt(pruneLength: 270, truncate: true)
    }
  }
`;
