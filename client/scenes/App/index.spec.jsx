import React from 'react';
import { shallow } from 'enzyme';

import App from './';

describe('test App component', () => {
  it('should render the component', () => {
    const enzymeWrapper = shallow(<App />);

    expect(enzymeWrapper).toHaveLength(1);
  });
});
