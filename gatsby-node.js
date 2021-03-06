const path = require('path');
const slugify = require('slugify');
const {createFilePath} = require(`gatsby-source-filesystem`);

exports.createSchemaCustomization = ({actions, schema}) => {
  const {createTypes} = actions;
  createTypes(`type Mdx implements Node @infer {
    frontmatter: MdxFrontmatter!
  }`);
  createTypes(`type MarkdownRemark implements Node @infer {
    frontmatter: MdxFrontmatter!
  }`);
  const typeDefs = [
    schema.buildObjectType({
      name: 'MdxFrontmatter',
      fields: {
        title: 'String!',
        subtitle: 'String',
        url: 'String!',
        publicationDate: {
          type: 'Date',
          extensions: {
            dateformat: {},
          },
        },
        author: 'String',
        duration: 'Int',
        season: 'Int',
        episodeNumber: 'Int',
        explicit: 'Boolean',
        active: {
          type: 'Boolean',
          resolve: source => source.active || true,
        },
      },
      interfaces: ['Node'],
    }),
  ];
  createTypes(typeDefs);
};

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === `Mdx` || node.internal.type === `MarkdownRemark`) {
    const {slug, isHome} = node.frontmatter;

    // create slug
    let _slug = slug
      ? // if define in frontmatter or create
        slugify(slug, {slug: true})
      : createFilePath({node, getNode, basePath: `content`});

    // remove "/page" in slug
    if (_slug.match(/\/pages\//)) {
      const s = _slug.match(/\/pages(\/.+)+/);
      _slug = s[1];
    }

    // detect if page is home
    if (isHome === true) {
      _slug = '/';
    }

    // add slug in field
    createNodeField({
      node,
      name: `slug`,
      value: _slug,
    });
  }

  // create type for yaml
  if (node.internal.type === 'DataYaml') {
    const filePath = createFilePath({node, getNode, basePath: `content`});
    const _type = filePath.match(/^\/(.+)\/./);
    createNodeField({
      node,
      name: `type`,
      value: _type.length > 1 ? _type[1] : null,
    });
  }
};

exports.createPages = async attr => {
  const {graphql, actions} = attr;

  const result = await graphql(`
    query {
      podcasts: allMdx(
        filter: {
          frontmatter: {active: {ne: false}}
          fileAbsolutePath: {regex: "/(/podcasts/)/"}
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
      pages: allMdx(
        filter: {
          frontmatter: {active: {ne: false}}
          fileAbsolutePath: {regex: "/(/pages/)/"}
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
  `);
  result.data.podcasts.edges.forEach(({node}) => {
    // create page for product
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/podcasts/index.jsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });

  // create pages
  result.data.pages.edges.forEach(({node}) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/pages/index.jsx`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
