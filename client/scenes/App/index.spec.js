import React from 'react';
import { shallow } from 'enzyme';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import App from './';

describe('test App component', () => {
    it('should render the component', () => {
        const enzymeWrapper = shallow(<App />);

        expect(enzymeWrapper).toHaveLength(1);
    });

  it('should contain components Header, Main, Footer', () => {
    const enzymeWrapper = shallow(<App />);

    expect(enzymeWrapper.containsAllMatchingElements([
      <Header />,
      <Main />,
      <Footer />,
    ])).toBeTruthy();
  });
});
