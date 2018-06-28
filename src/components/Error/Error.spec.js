import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Error from './';

Enzyme.configure({ adapter: new Adapter() });

describe('Error component', () => {
  it('should render self', () => {
    const enzymeWrapper = mount(<Error error="test" />);
    expect(enzymeWrapper.find('p').text()).toBe('test');
  });
});