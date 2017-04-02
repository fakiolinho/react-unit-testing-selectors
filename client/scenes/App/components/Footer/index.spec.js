import React from 'react';
import { shallow } from 'enzyme';

import Footer from './';

describe('test Footer component', () => {
  it('should render the component', () => {
    const enzymeWrapper = shallow(<Footer />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should contain footer node', () => {
    const enzymeWrapper = shallow(<Footer />);

    expect(enzymeWrapper.find('footer')).toHaveLength(1);
  });
});
