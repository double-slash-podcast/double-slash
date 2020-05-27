import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';
import BreadCrumb from '../../components/Breadcrumb';
import SEO from '../../components/Seo';

import styles from './styles.module.css';

const Page = ({data, location}) => {
  const {mdx} = data;
  const {frontmatter} = mdx;
  const {title, description, isHome} = frontmatter;
  return (
    <>
      <SEO
        title={title}
        description={
          description && description !== '' ? description : mdx.excerpt
        }
      />
      <div className={isHome ? '' : styles.page}>
        {!isHome && <BreadCrumb location={location} title={title} />}

        {!isHome && <h1>{title}</h1>}
        <div>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </div>
    </>
  );
};

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      frontmatter {
        title
        description
        isHome
      }
      body
      excerpt(pruneLength: 200, truncate: true)
    }
  }
`;
