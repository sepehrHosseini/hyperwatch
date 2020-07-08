import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { get, mapValues } from 'lodash';
import TitlesGrid from '../../components/TitlesGrid';

import { updateSearchQuery as updateQueryAction } from '../Header/actions';

const selectors = (state) => ({
  movies: state.search.movies,
  shows: state.search.shows,
  query: state.header.searchQuery,
  isLoading: state.search.isLoading,
  single: state.titles.single,
});

const SearchPage = () => {
  const params = useParams();
  const { query, movies, shows, isLoading, single } = useSelector(
    selectors,
  );
  const dispatch = useDispatch();
  const updateQuery = useCallback(
    (query, force) => dispatch(updateQueryAction(query, force)),
    [dispatch],
  );

  const queryInURL = get(params, 'query');

  useEffect(() => {
    if (!queryInURL || queryInURL === query) return;

    updateQuery(queryInURL, true);
  }, []);

  const flatData = (list) => list.map((item) => item[item.type]);
  const data = mapValues({ movies, shows }, flatData);

  return (
    <div>
      <TitlesGrid
        data={data}
        listIsLoading={isLoading}
        singleState={single}
      />
    </div>
  );
};

export default SearchPage;
