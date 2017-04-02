import React from 'react';
import { shallow } from 'enzyme';

import Header from './';

describe('test Header component', () => {
  it('should render the component', () => {
    const enzymeWrapper = shallow(<Header />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should contain header node', () => {
    const enzymeWrapper = shallow(<Header />);

    expect(enzymeWrapper.find('header')).toHaveLength(1);
  });
});
