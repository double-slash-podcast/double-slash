import React from "react"
import { Link } from "gatsby"
import { usePodcastsList } from "../../query/useQuery"
import styles from "./styles.module.css"

export default () => {
  const podcastList = usePodcastsList()
  return (
    <div>
      {podcastList.podcastEpisodes.edges.map(({ node }) => {
        const { frontmatter, excerpt, fields } = node
        const {
          title,
          id,
          season,
          episodeNumber,
          publicationDate,
        } = frontmatter
        const { slug } = fields
        return (
          <div className={styles.episode_list} key={id}>
            <h2 className={styles.episode_list_title}>
              <Link to={slug}>{title}</Link>
            </h2>
            <div className={styles.episode_list_info}>
              <strong>{publicationDate}</strong>
              <strong>
                Saison {season}, épisode: {episodeNumber}
              </strong>
            </div>
            <p>{excerpt}</p>
          </div>
        )
      })}
    </div>
  )
}
