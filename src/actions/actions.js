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
import api from '../data/api';

export const fetchMovies = () => async (dispatch, getState) => {
  dispatch({ type: FETCH_MOVIES });

  const {
    settings: { sortBy },
  } = getState();
  const { data: movies } = await api.fetchMovies({ sortBy });

  dispatch({ type: APPLY_MOVIES, movies });
};

export const searchMovies = (search, searchBy) => async (
  dispatch,
  getState
) => {
  if (!search && !searchBy) dispatch(fetchMovies());
  dispatch({ type: SEARCH_MOVIES });

  const {
    settings: { sortBy },
  } = getState();
  const { data: movies } = await api.fetchMovies({ sortBy, search, searchBy });

  dispatch({ type: APPLY_MOVIES, movies });
};

export const openMovie = id => async dispatch => {
  dispatch({ type: FETCH_CURRENT_MOVIE });

  const {
    movie,
    suggestedMovies,
    currentMovieGenre,
  } = await api.getMovieWithSuggested(id);

  dispatch({
    type: APPLY_CURRENT_MOVIE,
    movie,
    suggestedMovies,
    currentMovieGenre,
  });
};

export const sortMovies = sortBy => ({ type: SORT_MOVIES, sortBy });

export const backToSearch = () => (dispatch, getState) => {
  const {
    settings: { sortBy },
  } = getState();

  dispatch(fetchMovies());
  dispatch(sortMovies(sortBy));
  dispatch({ type: BACK_TO_SEARCH });
};

export const getErrorPage = () => ({ type: NO_PATH });
