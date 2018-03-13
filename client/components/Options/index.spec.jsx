import React from 'react';
import { mount } from 'enzyme';

import Options from './';

describe('test Options component', () => {
  it('instance method handleAdd should be triggered when add button gets clicked', () => {
    const enzymeWrapper = mount(<Options />);
    const spy = jest.spyOn(enzymeWrapper.instance(), 'handleAdd');
    enzymeWrapper.instance().forceUpdate();

    enzymeWrapper.find('[data-test="add"]').simulate('click');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
