import React from 'react';
import { mount } from 'enzyme';
import RadioButton from '../RadioButton';
import RadioButtonItem from '../RadioButtonItem';

let wrapper;
beforeEach(() => {
  wrapper = mount(
    <RadioButton
      title="Sort by"
      options={[
        { code: 'release_date', text: 'release date' },
        { code: 'rating', text: 'rating' },
      ]}
    />
  );
});
describe('RadioButton', () => {
  it('renders two radio buttons', () => {
    expect(wrapper.find(RadioButtonItem)).toHaveLength(2);
  });
  it('change state on handleChange', () => {
    expect(wrapper.instance().state.active).toBe(null);
    wrapper.instance().handleChange('genre');
    expect(wrapper.instance().state.active).toBe('genre');
  });
  it('getValue receives value', () => {
    wrapper.instance().handleChange('genre');
    expect(wrapper.instance().getValue()).toBe('genre');
  });
});
