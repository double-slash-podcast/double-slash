const path = require("path")
const slugify = require("slugify")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(`type Mdx implements Node @infer {
    frontmatter: MdxFrontmatter!
  }`)
  createTypes(`type MarkdownRemark implements Node @infer {
    frontmatter: MdxFrontmatter!
  }`)
  const typeDefs = [
    schema.buildObjectType({
      name: "MdxFrontmatter",
      fields: {
        title: "String!",
        subtitle: "String",
        url: "String!",
        publicationDate: {
          type: "Date",
          extensions: {
            dateformat: {},
          },
        },
        author: "String",
        duration: "Int",
        season: "Int",
        episodeNumber: "Int",
        explicit: "Boolean",
        active: {
          type: "Boolean",
          resolve: source => source.receivedSwag || true,
        },
      },
      interfaces: ["Node"],
    }),
  ]
  createTypes(typeDefs)
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx` || node.internal.type === `MarkdownRemark`) {
    const { slug } = node.frontmatter

    // create slug
    const _slug = slug
      ? // if define in frontmatter or create
        slugify(slug, { slug: true })
      : createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: _slug,
    })
  }
  if (node.internal.type === "DataYaml") {
    const filePath = createFilePath({ node, getNode, basePath: `content` })
    const _type = filePath.match(/^\/(.+)\/./)
    createNodeField({
      node,
      name: `type`,
      value: _type.length > 1 ? _type[1] : null,
    })
  }
}

exports.createPages = async attr => {
  const { graphql, actions } = attr

  const result = await graphql(`
    query {
      products: allMdx(
        filter: {
          frontmatter: { active: { ne: false } }
          fileAbsolutePath: { regex: "/(/podcasts/)/" }
        }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.products.edges.forEach(({ node }) => {
    // create page for product
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/podcasts/index.jsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
