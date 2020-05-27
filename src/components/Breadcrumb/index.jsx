import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

import styles from './styles.module.css';

const BreadCrumb = ({title, location}) => {
  const {allMdx} = useStaticQuery(graphql`
    query AllPages {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `);
  const {pathname} = location;
  // expolde path
  const explodePath = pathname ? pathname.split('/') : null;
  let _links = [];
  if (pathname) {
    // remove empty
    const _explodePath = explodePath.filter(e => e !== '');
    // search url in all mdx
    _explodePath.forEach(e => {
      _links = [
        ..._links,
        ...allMdx.nodes.filter(a => {
          return (
            a.fields.slug.match(new RegExp(`^/${e}/$`)) !== null &&
            a.fields.slug !== pathname
          );
        }),
      ];
    });
  }
  return (
    <span className={styles.breadcrumb}>
      <Link to="/">Accueil</Link>
      {_links.map(l => (
        <Link key="{l.id}" to={l.fields.slug}>
          {l.frontmatter.title}
        </Link>
      ))}
      <span>{title}</span>
    </span>
  );
};

export default BreadCrumb;
