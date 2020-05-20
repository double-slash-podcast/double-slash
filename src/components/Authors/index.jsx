/* eslint "react/jsx-no-target-blank": "off" */

import React from "react"
import Img from "gatsby-image"
import { useAuthorsList } from "../../query/useAuthorsList"

import styles from "./styles.module.css"

const Authors = () => {
  const { allDataYaml } = useAuthorsList()
  return (
    <div class={styles.authors}>
      {allDataYaml.edges.map(({ node }) => {
        const { name, twitter, website, image } = node
        const twname = twitter
          ? twitter.substring(twitter.lastIndexOf("/") + 1)
          : ""
        const wurl = website ? website.replace("https://", "") : ""
        return (
          <div key={name} class={styles.author}>
            <div class={styles.info}>
              <strong>{name}</strong>
              <a href={twitter} target="_blank">
                {`@${twname}`}
              </a>
              <a href={website} target="_blank">
                {wurl}
              </a>
            </div>
            <div class={styles.image}>
              <Img fluid={image.childImageSharp.fluid} alt={name} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Authors
