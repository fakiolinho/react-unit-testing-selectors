import React from 'react';
import { shallow, mount } from 'enzyme';

import Logo from './components/Logo';
import { Main } from './';

describe('test Main component', () => {
  it('should render the component', () => {
    const props = {
      repo: {},
      isLoading: false,
      error: '',
      getRepo: jest.fn(),
    };
    const enzymeWrapper = shallow(<Main {...props} />);

    expect(enzymeWrapper).toHaveLength(1);
  });

  it('should contain main node', () => {
    const props = {
      repo: {},
      isLoading: false,
      error: '',
      getRepo: jest.fn(),
    };
    const enzymeWrapper = shallow(<Main {...props} />);

    expect(enzymeWrapper.find('main')).toHaveLength(1);
  });

  it('should contain Logo component', () => {
    const props = {
      repo: {},
      isLoading: false,
      error: '',
      getRepo: jest.fn(),
    };
    const enzymeWrapper = shallow(<Main {...props} />);

    expect(enzymeWrapper.contains(<Logo />)).toBeTruthy();
  });

  it('should trigger getRepo once', () => {
    const props = {
      repo: {},
      isLoading: false,
      error: '',
      getRepo: jest.fn(),
    };
    const enzymeWrapper = mount(<Main {...props} />);

    expect(props.getRepo).toHaveBeenCalledTimes(1);
  });

  it('should show stars when repo.stars exist', () => {
    const props = {
      repo: {
        stargazers_count: 5,
      },
      isLoading: false,
      error: '',
      getRepo: jest.fn(),
    };
    const enzymeWrapper = shallow(<Main {...props} />);

    expect(enzymeWrapper.find('h3')).toHaveLength(1);
  });

  it('should show loading message when repo.stars do not exist and isLoading is true', () => {
    const props = {
      repo: {},
      isLoading: true,
      error: '',
      getRepo: jest.fn(),
    };
    const enzymeWrapper = shallow(<Main {...props} />);

    expect(enzymeWrapper.find('p')).toHaveLength(1);
    expect(enzymeWrapper.find('p').text()).toBe('...loading');
  });

  it('should show error message when repo.stars do not exist and isLoading is false', () => {
    const props = {
      repo: {},
      isLoading: false,
      error: 'Oops, sth went wrong!!',
      getRepo: jest.fn(),
    };
    const enzymeWrapper = shallow(<Main {...props} />);

    expect(enzymeWrapper.find('p')).toHaveLength(1);
    expect(enzymeWrapper.find('p').text()).toBe('Oops, sth went wrong!!');
  });
});
