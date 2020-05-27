import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import ListEpisode from '../ListEpisode';
import Contact from '../Contact';
import Top from '../Top';

export const components = {ListEpisode, Top, Contact};

export const WrapRootElement = ({children}) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
