import {combineReducers } from 'redux';
import series from './components/pages/series/reducers/series.reducers';
import movies from './components/pages/movies/reducers/movies.reducers';

export const rootReducer = combineReducers({
  series,
  movies
})
