import filter from 'lodash/filter';
import sortBy from 'lodash/sortBy';
import slice from 'lodash/slice';

export const fetchingMovies = () => ({
  type: 'FETCHING_MOVIES',
});

export const fetchedMovies = movies => ({
  type: 'FETCHED_MOVIES_SUCCESSFUL',
  payload: movies
})

export const fetchMovies = () => {
  return function (dispatch) {
    dispatch(fetchingMovies());
    return fetch('api/stub/something.json')
      .then(res => res.json())
      .then(res => slice(sortBy(
        filter(res.entries, data => data.programType === 'movie' && data.releaseYear >= 2010),
        movies => movies.title
      ),
      0, 21))
      .then(res => dispatch(fetchedMovies(res)));
  }
}
