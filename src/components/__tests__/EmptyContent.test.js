import React from 'react';
import EmptyContent from '../EmptyContent';
import renderer from 'react-test-renderer';

it('Empty content', () => {
  const EmptyContentSnapshot = renderer.create(<EmptyContent />).toJSON();
  expect(EmptyContentSnapshot).toMatchSnapshot();
});
