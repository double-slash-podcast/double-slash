import 'url-search-params-polyfill';
import {useLocation} from '@reach/router';

/**
 * get search variable in url
 */
export const useSearch = () => {
  const params = useLocation();
  const search = new URLSearchParams(params.search);
  return search;
};

export default useSearch;
