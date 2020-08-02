import React from 'react';
import GatsbyLink from 'gatsby-link';
import {isExternalLink} from './helper';

/**
 * Render Link Gatsby but, you can indicate just the name of dir in content and the component find the slug for the lang active, is magic ;)
 *
 */
const Link = ({children, href, to, title, className, onClick, data}) => {
  let _to = to;
  // mdx pass url with href
  if (!_to && href) {
    _to = href;
  }

  // internal link
  if (isExternalLink(_to) === false) {
    return (
      <GatsbyLink className={`${className || ''}`} to={_to} title={title}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a
      href={_to}
      className={`${className || ''}`}
      title={title}
      onClick={onClick}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default Link;
