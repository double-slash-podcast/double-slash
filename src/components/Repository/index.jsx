/* eslint "react/jsx-no-target-blank": "off" */

import React from "react"
import Img from "gatsby-image"
import { useRepository } from "../../query/useRepository"

import styles from "./styles.module.css"

const Repositories = () => {
  const { allDataYaml } = useRepository()
  return (
    <div class={styles.repositories}>
      {allDataYaml.edges.map(({ node }) => {
        const { name, url, image } = node
        return (
          <a href={url} target="_blank">
            <Img fixed={image.childImageSharp.fixed} alt={name} />
          </a>
        )
      })}
    </div>
  )
}

export default Repositories
