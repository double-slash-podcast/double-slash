import React from "react"
import useSiteMeta from "../../query/useSiteMeta"

import styles from "./styles.module.css"

const Footer = () => {
  const { siteMetadata } = useSiteMeta()
  return (
    <footer>
      <div className={styles.footer_container}>
        {new Date().getFullYear()} {siteMetadata.titleDefault} <br />
        Tous les droits sont réservés.
      </div>
    </footer>
  )
}

export default Footer
