import { combineReducers } from 'redux';
import movies from './movies';
import currentMovie from './currentMovie';
import settings from './settings';

export default combineReducers({
  movies,
  currentMovie,
  settings,
});
