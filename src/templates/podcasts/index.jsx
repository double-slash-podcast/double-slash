/* eslint "jsx-a11y/media-has-caption": 0 */
import React, {useEffect, useRef, useState} from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';
import SEO from '../../components/Seo';
import BreadCrumb from '../../components/Breadcrumb';
import Loader from '../../components/Loader';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Podcast = ({data, location}) => {
  const [playerHidden, setPlayerHidden] = useState(true);
  const player = useRef(null);
  const {mdx} = data;
  const {frontmatter} = mdx;
  const {title, subtitle, url, episodeNumber, publicationDate} = frontmatter;

  const d = new Date(publicationDate);
  useEffect(() => {
    if (window.Plyr) {
      setTimeout(() => {
        new window.Plyr(player.current);
        setPlayerHidden(false);
      }, 500);
    }
  }, []);
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
          <audio
            preload="none"
            ref={player}
            controls
            style={{
              visibility: `${playerHidden === true ? 'hidden' : 'visible'}`,
              height: `${playerHidden === true ? '0px' : 'auto'}`,
            }}
          >
            <source src={url} type="audio/mp3" />
          </audio>
          <Loader
            style={{
              visibility: `${playerHidden === false ? 'hidden' : 'visible'}`,
            }}
          />
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
