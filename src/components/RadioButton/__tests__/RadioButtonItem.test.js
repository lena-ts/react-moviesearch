import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import RadioButtonItem from '../RadioButtonItem';

describe('RadioButtonItem', () => {
  it('test click', () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <RadioButtonItem
        handleChange={spy}
        text="title"
        code="title"
        isActive={true}
      />
    );
    wrapper.find('input').simulate('click');
    expect(spy.calledOnce).toBe(true);
  });
});
