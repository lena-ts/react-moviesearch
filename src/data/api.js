import { RATING } from '../constants/sortOptions';
import fetch from 'cross-fetch';

const HOST = 'https://reactjs-cdp.herokuapp.com/movies';
const LIMIT = '15';

const buildMoviesUrl = (sortBy, search, searchBy) => {
  const url = `${HOST}?sortBy=${sortBy}&sortOrder=desc&limit=${LIMIT}`;
  return search ? `${url}&search=${search}&searchBy=${searchBy}` : url;
};

const fetchMovie = async id => {
  const url = `${HOST}/${id}`;
  const response = await fetch(url);
  return await response.json();
};

const fetchMovies = async ({ sortBy = RATING, search, searchBy }) => {
  const url = buildMoviesUrl(sortBy, search, searchBy);
  const response = await fetch(url);
  return await response.json();
};

const getMovieWithSuggested = async id => {
  const movie = await fetchMovie(id);
  const currentMovieGenre = movie.genres[0];
  const { data: suggestedMovies } = await fetchMovies({
    sortBy: RATING,
    search: currentMovieGenre,
    searchBy: 'genres',
  });

  return {
    movie,
    currentMovieGenre,
    suggestedMovies,
  };
};

export default {
  fetchMovie,
  fetchMovies,
  getMovieWithSuggested,
};
