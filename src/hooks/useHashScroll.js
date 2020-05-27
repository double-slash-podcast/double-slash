import {useLayoutEffect} from 'react';
import {useLocation} from '@reach/router';

/**
 * find hash in url and got to element
 */
export const useHashScroll = () => {
  const {hash} = useLocation();
  useLayoutEffect(() => {
    if (!hash) return;
    const element = document.getElementById(hash.replace('#', ''));
    if (element) {
      element.scrollIntoView();
    }
  }, [hash]);
};

export default useHashScroll;
