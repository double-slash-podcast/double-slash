/* eslint "jsx-a11y/media-has-caption": 0 */
import React, { useContext, useEffect } from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';
import SEO from '../../components/Seo';
import BreadCrumb from '../../components/Breadcrumb';
import { StoreContext } from '../../store';
import { secondToTime } from '../../helpers/time';

import styles from './styles.module.css';
import EpisodeButton from '../../components/EpisodeButton';
import { getGitUrl } from '../../helpers/git';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const Podcast = ({ data, location }) => {
  const { state, dispatch } = useContext(StoreContext);
  const { mdx } = data;
  const { frontmatter, id, fileAbsolutePath } = mdx;
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

  const encodedTitle = encodeURI(title)

  const episodeSocialImageUrl = `https://res.cloudinary.com/doubleslash/image/upload/co_rgb:a700ff,g_east,l_text:mono.otf_120_letter_spacing_-5:%23${episodeNumber},x_54/co_rgb:a700ff,g_east,l_text:mono.otf_120_letter_spacing_-5:${encodedTitle},x_54,y_150,w_1000/v1597238012/FACEBOOK_-_OG_Card_RAW_eu5xdv.png`

  return (
    <>
      <SEO
        title={title}
        image={episodeSocialImageUrl}
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
        <div className={styles.pr}>
          Si vous voyez une erreur ou une faute sur cette page, vous pouvez
          ouvrir une PR directement sur le repository github du site.
          <br /> Le fichier se trouve ici :{' '}
          <a
            href={getGitUrl(fileAbsolutePath)}
            target="_blank"
            rel="noreferrer"
          >
            {getGitUrl(fileAbsolutePath)}
          </a>
        </div>
      </div>
    </>
  );
};

export default Podcast;

export const query = graphql`
  query PodcastQuery($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      fileAbsolutePath
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
