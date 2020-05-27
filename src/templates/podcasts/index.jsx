/* eslint "jsx-a11y/media-has-caption": 0 */
import React, {useEffect, useRef} from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';
import SEO from '../../components/Seo';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Podcast = ({data}) => {
  const player = useRef(null);
  const {mdx} = data;
  const {frontmatter} = mdx;
  const {title, subtitle, url, episodeNumber, publicationDate} = frontmatter;

  const d = new Date(publicationDate);
  useEffect(() => {
    if (window.Plyr) {
      new window.Plyr(player.current);
    }
  }, []);
  return (
    <>
      <SEO
        title={title}
        description={subtitle && subtitle !== '' ? subtitle : mdx.excerpt}
      />
      <div className={styles.episode}>
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
          <audio ref={player} controls>
            <source src={url} type="audio/mp3" />
          </audio>
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
        season
        episodeNumber
      }
      body
      excerpt(pruneLength: 270, truncate: true)
    }
  }
`;
