import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import SEO from "../../components/Seo"
// import Img from "gatsby-image"

import styles from "./styles.module.css"

const Podcast = ({ data }) => {
  const { mdx } = data
  const { frontmatter } = mdx
  const {
    title,
    subtitle,
    season,
    episodeNumber,
    publicationDate,
  } = frontmatter
  return (
    <>
      <SEO
        title={title}
        description={subtitle && subtitle !== "" ? subtitle : mdx.excerpt}
      />
      <div>
        <h1>{title}</h1>
        <div className={styles.episode_info}>
          <strong>{publicationDate}</strong>
          <strong>
            Saison {season}, épisode: {episodeNumber}
          </strong>
        </div>
        <div>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </div>
    </>
  )
}

export default Podcast

export const query = graphql`
  query PodcatsQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        subtitle
        publicationDate(formatString: "DD/MM/YYYY")
        url
        season
        episodeNumber
      }
      body
      excerpt(pruneLength: 200, truncate: true)
    }
  }
`
