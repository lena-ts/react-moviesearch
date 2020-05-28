import movies from '../movies';
import {
  APPLY_MOVIES,
  APPLY_CURRENT_MOVIE,
  SORT_MOVIES,
} from '../../actions/types';

const moviesStateStub = [
  {
    id: 351286,
    title: 'Jurassic World: Fallen Kingdom',
    tagline: 'Life finds a way',
    vote_average: 0,
    vote_count: 28,
    release_date: '2018-06-01',
    poster_path:
      'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
    overview:
      'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
    budget: 0,
    revenue: 0,
    genres: ['Action', 'Adventure', 'Drama', 'Science Fiction', 'Thriller'],
    runtime: null,
  },
  {
    id: 467867,
    title: 'Paterno',
    tagline: 'The greater the legend, the harder the fall.',
    vote_average: 0,
    vote_count: 29,
    release_date: '2019-04-07',
    poster_path:
      'https://image.tmdb.org/t/p/w500/Ad4y2Cc2FcY1wOk3DH7HVWlrgEM.jpg',
    overview:
      'After becoming the winningest coach in college football history failure regarding the victims.',
    budget: 0,
    revenue: 0,
    genres: ['TV Movie', 'Drama'],
    runtime: 105,
  },
];

const movieStateAfterSortBy = moviesStateStub.reverse();

describe('movie reducer', () => {
  it('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual([]);
  });

  it('should handle APPLY_MOVIES', () => {
    const action = {
      type: APPLY_MOVIES,
      movies: moviesStateStub,
    };
    expect(movies([], action)).toEqual(moviesStateStub);
  });

  it('should sort movie state by vote_count', () => {
    const action = {
      type: SORT_MOVIES,
      sortBy: 'vote_count',
    };

    expect(movies(moviesStateStub, action)).toEqual(movieStateAfterSortBy);
  });

  it('should sort movie state by release_date', () => {
    const action = {
      type: SORT_MOVIES,
      sortBy: 'release_date',
    };

    expect(movies(movieStateAfterSortBy, action)).toEqual(moviesStateStub);
  });

  it('should apply suggested movies', () => {
    const action = {
      type: APPLY_CURRENT_MOVIE,
      suggestedMovies: moviesStateStub,
    };
    expect(movies(undefined, action)).toEqual(moviesStateStub);
  });

  it('should return not changed state', () => {
    const action = {
      type: 'unknown_action',
    };
    expect(movies(moviesStateStub, action)).toEqual(moviesStateStub);
  });
});
