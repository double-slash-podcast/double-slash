import { graphql, useStaticQuery } from "gatsby"

/**
 * for repositories list
 */
export const useRepository = () =>
  useStaticQuery(graphql`
    query Repository {
      allDataYaml(filter: { fields: { type: { eq: "repository" } } }) {
        edges {
          node {
            url
            name
            id
            image {
              publicURL
              childImageSharp {
                fixed(width: 50) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
