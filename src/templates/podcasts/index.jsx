/* eslint "jsx-a11y/media-has-caption": 0 */
import React, {useContext, useEffect} from 'react';
import Img from 'gatsby-image';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';
import SEO from '../../components/Seo';
import BreadCrumb from '../../components/Breadcrumb';
import EpisodeButton from '../../components/EpisodeButton';
import {StoreContext} from '../../store';
import {secondToTime} from '../../helpers/time';
import {getGitUrl} from '../../helpers/git';
import {cleanAndEncodeURI} from '../../helpers/cleanURI';

import styles from './styles.module.css';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

// create url for image share
const getImgURL = ({episodeNumber, title}) =>
  `https://res.cloudinary.com/doubleslash/image/upload/co_rgb:a700ff,g_east,l_text:mono.otf_120_letter_spacing_-5:%23${episodeNumber},x_54/co_rgb:a700ff,g_east,l_text:mono.otf_120_letter_spacing_-5:${cleanAndEncodeURI(
    title,
  )},x_54,y_150,w_1000/v1597238012/FACEBOOK_-_OG_Card_RAW_eu5xdv.png`;

const Podcast = ({data, location}) => {
  const {state, dispatch} = useContext(StoreContext);
  const {mdx} = data;
  const {frontmatter, id, fileAbsolutePath} = mdx;
  const {
    title,
    subtitle,
    episodeNumber,
    duration,
    publicationDate,
    sponsor,
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
        image={getImgURL({episodeNumber, title})}
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
          {sponsor && (
            <div className={styles.sponsor}>
              <strong>Support de l'épisode :</strong>
              <div className={styles.sponsor_img}>
                <a href={sponsor?.url} target="_blank" rel="noreferrer">
                  <Img
                    fluid={sponsor?.img.childImageSharp.fluid}
                    alt={sponsor?.title}
                  />
                </a>
              </div>
            </div>
          )}
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
        <div className={styles.image_share}>
          <a
            href={getImgURL({episodeNumber, title})}
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Image pour l'épisode</span>
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
        sponsor {
          title
          url
          img {
            publicURL
            childImageSharp {
              fluid(maxWidth: 600, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
      id
      body
      excerpt(pruneLength: 270, truncate: true)
    }
  }
`;
