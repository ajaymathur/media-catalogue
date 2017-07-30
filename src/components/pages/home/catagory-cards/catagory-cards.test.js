import React from 'react';
import {shallow} from 'enzyme';
import {CatagoryCard} from './catagory-cards';

describe('CatagoryCard', () => {
  let wrapper;
  let homeCard = [{
    placeholder: 'placeholder',
    name: 'name'
  }];
  beforeEach(() => {
    wrapper = shallow(<CatagoryCard homeCard={homeCard} />);
  });
  it('renders single catagory-card-container', () => {
    expect(wrapper.find('div.catagory-card-container').length).toEqual(1);
  });
});
