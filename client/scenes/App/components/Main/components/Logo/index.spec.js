import React from 'react';
import { shallow } from 'enzyme';

import Logo from './';

describe('test Logo component', () => {
  it('should render the component', () => {
    const enzymeWrapper = shallow(<Logo />);

    expect(enzymeWrapper).toHaveLength(1);
  });
});
