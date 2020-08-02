import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import ListEpisode from '../ListEpisode';
import Contact from '../Contact';
import Top from '../Top';
import Link from '../Link';

export const components = {a: Link, ListEpisode, Top, Contact};

export const WrapRootElement = ({children}) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
