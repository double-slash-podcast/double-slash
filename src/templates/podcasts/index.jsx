/* eslint "jsx-a11y/media-has-caption": 0 */
import React, {useContext, useEffect} from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';
import SEO from '../../components/Seo';
import BreadCrumb from '../../components/Breadcrumb';
import {StoreContext} from '../../store';
import {secondToTime} from '../../helpers/time';

import styles from './styles.module.css';
import EpisodeButton from '../../components/EpisodeButton';

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
  const d = new Date(publicationDate);

  useEffect(() => {
    if (!state.podcastEnter) {
      dispatch({
        type: 'setPodcastEnter',
        payload: id,
      });
    }
  }, [id, state, dispatch]);

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
          <EpisodeButton id={id} />
          <span>
            {`Épisode "${title}"`}
            <br />
            {`Durée : ${secondToTime(duration)}`}
          </span>
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
