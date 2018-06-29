import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import Group from './';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    type: 'test',
    items: [
      {
        venue: {
          id: '49b6e8d2f964a52016531fe3',
          name: 'Russ & Daughters',
          location: {
            address: '179 E Houston St',
            lat: 40.72286707707289,
            lng: -73.98829148466851,
            distance: 130,
          },
          categories: [{
            id: '123',
            name: 'Gourmet Shop',
          }],
        },
      },
    ],
  };
  const enzymeWrapper = mount(<Group {...props} />);
  return { props, enzymeWrapper };
};

describe('Group component', () => {
  it('should render self', () => {
    const { props, enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h2').text()).toEqual(props.type);
    expect(enzymeWrapper.find('Venue')).toHaveLength(1);
  });
});