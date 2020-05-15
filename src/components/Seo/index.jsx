import React from "react"
import { Helmet } from "react-helmet"
import useSiteMeta from "../../query/useSiteMeta"

const SEO = ({ description, meta, title }) => {
  const { siteMetadata } = useSiteMeta()
  const { titleDefault, descriptionDefault } = siteMetadata
  const _lang = "fr"
  return (
    <Helmet
      htmlAttributes={{
        lang: _lang,
      }}
      title={title || titleDefault}
      meta={[
        {
          name: `description`,
          content: description || descriptionDefault,
        },
        {
          property: `og:title`,
          content: title || titleDefault,
        },
        {
          property: `og:description`,
          content: description || descriptionDefault,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        // {
        //   name: `twitter:creator`,
        //   content: author,
        // },
        {
          name: `twitter:title`,
          content: title || titleDefault,
        },
        {
          name: `twitter:description`,
          content: description || descriptionDefault,
        },
      ].concat(meta)}
    ></Helmet>
  )
}

SEO.defaultProps = {
  meta: [],
  description: ``,
}

export default SEO
