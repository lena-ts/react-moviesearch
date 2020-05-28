import React from 'react';
import { mount, shallow, render } from 'enzyme';
import Search from '../Search/Search';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();

const searchEventStub = {
  target: {
    name: 'searchValue',
    value: 'test',
  },
};

let onSearch = jest.fn();

const props = {
  onSearch: onSearch,
  location: {
    search: '?searchValue=day&searchBy=title',
  },
  searchMovies: jest.fn(),
  history: {
    push: jest.fn(),
  },
};

let wrapper;
beforeEach(() => {
  wrapper = mount(
    shallow(
      <Provider store={store}>
        <Search.WrappedComponent {...props} />
      </Provider>
    ).get(0)
  );
});

afterEach(() => {
  jest.clearAllMocks();
  wrapper.unmount();
});

describe('Search', () => {
  it('input is rendered', () => {
    expect(wrapper.find('.search-input')).toHaveLength(1);
  });
  it('change searchValue state on input change', () => {
    expect(wrapper.instance().state.searchValue).toBe('day');
    wrapper.instance().handleChange(searchEventStub);

    expect(wrapper.instance().state.searchValue).toBe('test');
  });
  it('clear searchValue state on form submit', () => {
    jest.spyOn(wrapper.instance(), 'handleSearch');
    wrapper.instance().handleChange(searchEventStub);
    wrapper.find('form').simulate('submit');
    expect(wrapper.instance().state.searchValue).toBe('test');
    expect(wrapper.instance().handleSearch).toHaveBeenCalledTimes(1);
  });
});
