import currentMovie from '../currentMovie';
import { BACK_TO_SEARCH, APPLY_CURRENT_MOVIE } from '../../actions/types';

const currentMovieStub = {
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
};

describe('current movie reducer', () => {
  it('should return current movie', () => {
    const action = {
      type: APPLY_CURRENT_MOVIE,
      movie: currentMovieStub,
    };

    expect(currentMovie(null, action)).toEqual(currentMovieStub);
  });

  it('should back to search on icon click', () => {
    const action = {
      type: BACK_TO_SEARCH,
    };
    expect(currentMovie(currentMovieStub, action)).toEqual(null);
  });

  it('should return not changed state', () => {
    const action = {
      type: 'unknown_action',
    };
    expect(currentMovie(currentMovieStub, action)).toEqual(currentMovieStub);
  });
});
