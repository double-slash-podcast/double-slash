const slugify = require("slugify")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
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
}
