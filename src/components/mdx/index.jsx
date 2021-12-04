import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import ListEpisode from '../ListEpisode';
import Contact from '../Contact';
import Top from '../Top';
import Link from '../Link';
import BlocBorder from '../BlocBorder';

export const components = {a: Link, ListEpisode, Top, Contact, BlocBorder};

export const WrapRootElement = ({children}) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
