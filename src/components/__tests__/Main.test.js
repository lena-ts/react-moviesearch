import React from 'react';
import { mount } from 'enzyme';
import { Main } from '../Main';
import RadioButton from '../RadioButton/RadioButton';
import MovieItem from '../Movie/MovieItem';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SampleData from '../../data/SampleData';

const mockStore = configureStore();
const store = mockStore();

let fetchMovies = jest.fn();
const props = {
  movies: SampleData,
  fetchMovies: fetchMovies,
};

const wrapper = mount(
  <Provider store={store}>
    <Main {...props} />
  </Provider>
);

describe('Main components', () => {
  it('Render RadioButton component', () => {
    expect(wrapper.find(RadioButton)).toHaveLength(1);
  });
});
