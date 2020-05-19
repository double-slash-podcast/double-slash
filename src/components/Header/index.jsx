import React from "react"
import useSiteMeta from "../../query/useSiteMeta"
import { Link } from "gatsby"

import styles from "./styles.module.css"

const Header = () => {
  const { siteMetadata } = useSiteMeta()
  return (
    <header>
      <div className={styles.header_container}>
        <Link to="/" className={styles.header_title}>
          {siteMetadata.titleDefault}
        </Link>
        <strong className={styles.header_baseline}>
          {siteMetadata.descriptionDefault}
        </strong>
        <div className={styles.logo}>
          <span>{"//"}</span>
          <span>{"."}</span>
        </div>
      </div>
    </header>
  )
}

export default Header
