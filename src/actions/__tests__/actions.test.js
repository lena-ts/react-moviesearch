import * as actions from '../actions';
import {
  SORT_MOVIES,
  BACK_TO_SEARCH,
  FETCH_CURRENT_MOVIE,
  FETCH_MOVIES,
  SEARCH_MOVIES,
} from '../types';

describe('actions', () => {
  it('should create an action for fetch movies', () => {
    const action = actions.fetchMovies();
    const dispatchSpy = jest.fn();
    const getStateSpy = jest.fn();

    action(dispatchSpy, getStateSpy('release_date'));
    expect(dispatchSpy).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith({ type: FETCH_MOVIES });
    expect(getStateSpy).toHaveBeenCalledWith('release_date');
  });

  it('should create an action for search movies', () => {
    const action = actions.searchMovies();
    const dispatchSpy = jest.fn();
    const getStateSpy = jest.fn();
    const sortBy = 'release_date';
    const search = 'drama';
    const searchBy = 'genre';

    action(dispatchSpy, getStateSpy(sortBy, search, searchBy));
    expect(dispatchSpy).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith({ type: SEARCH_MOVIES });
    expect(getStateSpy).toHaveBeenCalledWith('release_date', 'drama', 'genre');
  });

  it('should create an action for open movie', () => {
    const action = actions.openMovie();
    const dispatchSpy = jest.fn();
    const id = '320288';

    action(dispatchSpy);
    expect(dispatchSpy).toHaveBeenCalled();
    expect(dispatchSpy).toHaveBeenCalledWith({ type: FETCH_CURRENT_MOVIE });

    action(id);
    expect(id).toBe('320288');
  });

  it('should create an action to sort movies', () => {
    const expectedAction = {
      type: SORT_MOVIES,
      sortBy: 'vote_count',
    };
    expect(actions.sortMovies('vote_count')).toEqual(expectedAction);
  });

  it('should create an action for back to search', () => {
    const action = actions.backToSearch();
    const dispatchSpy = jest.fn();
    const getStateSpy = jest.fn();

    getStateSpy.mockReturnValue({ settings: { sortBy: 'release_date' } });

    action(dispatchSpy, getStateSpy);
    expect(dispatchSpy).toHaveBeenCalledWith({ type: BACK_TO_SEARCH });
  });
});
