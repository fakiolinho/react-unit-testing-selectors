import React from 'react';
import { shallow, mount } from 'enzyme';

import Card from './';

describe('test Card component', () => {
  it('should render the component', () => {
    const enzymeWrapper = shallow(<Card />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('instance method handleSalute should get called when salute button gets clicked', () => {
    const enzymeWrapper = shallow(<Card />);

    enzymeWrapper.find('[data-test="salute"]').simulate('click');

    expect(enzymeWrapper.state('salute')).toBeTruthy();
    expect(enzymeWrapper.find('[data-test="salute"]').text()).toEqual(
      'You said hi',
    );
  });
});
