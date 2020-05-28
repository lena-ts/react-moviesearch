import { APPLY_CURRENT_MOVIE, BACK_TO_SEARCH } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case APPLY_CURRENT_MOVIE:
      return action.movie || null;
    case BACK_TO_SEARCH:
      return null;
    default:
      return state;
  }
};
