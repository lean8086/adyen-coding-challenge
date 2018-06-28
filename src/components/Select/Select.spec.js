import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Select from './';
import searchOptions from '../../config/searchOptions';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    type: 'section',
    value: 'coffee',
  };
  const enzymeWrapper = mount(<Select {...props} />);
  return { props, enzymeWrapper };
};

describe('Select component', () => {
  it('should render self', () => {
    const { props, enzymeWrapper } = setup();
    const selectProps = enzymeWrapper.find('select').props();
    expect(selectProps.name).toEqual(props.type);
    expect(selectProps.value).toEqual(props.value);
  });
  
  it('should render options', () => {
    const { props, enzymeWrapper } = setup();
    const firstNode = enzymeWrapper.find('option').first();
    const firstExpectedText = Object.keys(searchOptions.section)[0];
    expect(firstNode.text()).toEqual(firstExpectedText);
    expect(firstNode.props().value).toEqual(searchOptions.section[firstExpectedText]);
  });
});