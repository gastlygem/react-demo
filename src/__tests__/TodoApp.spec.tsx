import * as React from 'react';
import { mount } from 'enzyme';
import TodoApp from '../TodoApp';

it('should add an item after input and submit', () => {
  const wrapper = mount(<TodoApp />);
  wrapper.find('input').simulate('change', { target: { value: 'foo' } });
  wrapper.find('button').simulate('submit');
  const item = wrapper.find('li');
  expect(item.text()).toEqual('foo');
});
