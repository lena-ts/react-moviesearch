import React from 'react';
import MovieItem from '../Movie/MovieItem';
import renderer from 'react-test-renderer';

it('Movie item shapshot', () => {
  const MovieSnpashot = renderer.create(<MovieItem />).toJSON();
  expect(MovieSnpashot).toMatchSnapshot();
});
