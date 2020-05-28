import {
  APPLY_MOVIES,
  APPLY_CURRENT_MOVIE,
  SORT_MOVIES,
} from '../actions/types';

const sortMovies = (array, sortBy) => {
  switch (sortBy) {
    case 'vote_count':
      return [...array].sort(function(a, b) {
        return b.vote_count - a.vote_count;
      });
    default:
      return [...array].sort(function(a, b) {
        return new Date(b.release_date) - new Date(a.release_date);
      });
  }
};

export default (state = [], action) => {
  switch (action.type) {
    case APPLY_MOVIES:
      return action.movies || [];
    case APPLY_CURRENT_MOVIE:
      return action.suggestedMovies || [];
    case SORT_MOVIES:
      return sortMovies(state, action.sortBy);
    default:
      return state;
  }
};
