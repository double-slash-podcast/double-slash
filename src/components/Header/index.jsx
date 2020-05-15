import React from "react"
import useSiteMeta from "../../query/useSiteMeta"

import styles from "./styles.module.css"

const Header = () => {
  const { siteMetadata } = useSiteMeta()
  return (
    <header>
      <div className={styles.header_container}>
        <div className={styles.header_title}>{siteMetadata.titleDefault}</div>
      </div>
    </header>
  )
}

export default Header
