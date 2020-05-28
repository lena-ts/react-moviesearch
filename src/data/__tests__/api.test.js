import nock from 'nock';
import api from '../api';
import buildMoviesUrl from '../api';
import fetchMovie from '../api';

describe.skip('api', () => {
  it('build movie url', () => {
    expect(buildMoviesUrl('release_date', 'drama', 'genre')).toHaveBeenCalled();
  });

  it('should return a movie', () => {
    const expectedMovie = '320288';
    nock('https://reactjs-cdp.herokuapp.com')
      .get('/movie/320288')
      .reply(200, {
        id: expectedMovie,
      });

    return api
      .fetchMovie(expectedMovie)
      .then(res => res.id)
      .then(res => expect(res).toEqual(expectedMovie));
  });
});
