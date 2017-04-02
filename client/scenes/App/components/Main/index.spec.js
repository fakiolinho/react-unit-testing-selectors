import React from 'react';
import { shallow } from 'enzyme';

import Main from './';

describe('test Main component', () => {
  it('should render the component', () => {
    const enzymeWrapper = shallow(<Main />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should render children', () => {
    const enzymeWrapper = shallow(<Main>Hello World</Main>);

    expect(enzymeWrapper.find('main').text()).toBe('Hello World');
  });
});
