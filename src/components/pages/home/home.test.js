import React from 'react';
import {shallow} from 'enzyme';
import Home from './home';

describe('Home', () => {
  it('runs', () => {
    expect(4 + 4).toEqual(8);
  });
  let wrapper;
  let instance;
  beforeEach(() => {
    wrapper = shallow(<Home/>);
    instance = wrapper.instance();
  });
  it('renders home section', () => {
    expect(wrapper.find('section.home-section').length).toEqual(1);
  });
  it('diplays two cards', () => {
    expect(wrapper.find('Link').length).toEqual(2);
  });
});
