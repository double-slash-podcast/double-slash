import React from "react"
import { usePodcastsList } from "../../query/usePodcastsList"
import Episode from "../Episode"

// import styles from "./styles.module.css"

const ListEpisode = () => {
  const podcastList = usePodcastsList()
  return (
    <div>
      {podcastList.podcastEpisodes.edges.map(({ node }) => {
        return <Episode node={node} />
      })}
    </div>
  )
}

export default ListEpisode
