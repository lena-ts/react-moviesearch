import {
  FETCH_MOVIES,
  SEARCH_MOVIES,
  APPLY_MOVIES,
  FETCH_CURRENT_MOVIE,
  APPLY_CURRENT_MOVIE,
  SORT_MOVIES,
  BACK_TO_SEARCH,
  NO_PATH,
} from '../actions/types';
import { RELEASE_DATE } from '../constants/sortOptions';

const initialState = {
  isLoading: false,
  sortBy: RELEASE_DATE,
  currentMovieGenre: null,
  noPath: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
    case SEARCH_MOVIES:
    case FETCH_CURRENT_MOVIE:
      return { ...state, isLoading: true, noPath: false };
    case APPLY_MOVIES:
      return { ...state, isLoading: false };
    case APPLY_CURRENT_MOVIE:
      return {
        ...state,
        isLoading: false,
        currentMovieGenre: action.currentMovieGenre,
      };
    case SORT_MOVIES:
      return { ...state, sortBy: action.sortBy };
    case BACK_TO_SEARCH:
      return { ...state, currentMovieGenre: null };
    case NO_PATH:
      return { ...state, noPath: true };
    default:
      return state;
  }
};
