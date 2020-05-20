import React from "react"
import { Link } from "gatsby"
import styles from "./styles.module.css"

const Episode = ({ node }) => {
  const { frontmatter, excerpt, fields } = node
  const { title, id, episodeNumber, publicationDate } = frontmatter
  const { slug } = fields
  return (
    <div className={styles.episode} key={id}>
      <h2 className={styles.episode_title}>
        <Link to={slug}>
          {"//."}
          {episodeNumber}
          {" - "}
          {title}
        </Link>
      </h2>
      <div className={styles.episode_info}>
        <strong>{publicationDate}</strong>
      </div>
      <p>{excerpt}</p>
    </div>
  )
}

export default Episode
