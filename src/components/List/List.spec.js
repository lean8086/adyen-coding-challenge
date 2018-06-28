import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import List from './';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  type: 'test',
  venues: {
    warning: {
      text: 'There aren\'t a lot of results near you. Try something more general, reset your filters, or expand the search area.'
    },
    headerFullLocation: 'Lower East Side, New York',
    totalResults: 230,
    groups: [
      {
        type: 'Recommended Places',
        name: 'recommended',
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
              categories: [{ name: 'Gourmet Shop' }],
            },
          },
        ],    
      },
    ],
  },
};

describe('List component', () => {
  it('should render self', () => {
    const enzymeWrapper = mount(<List {...props} />);
    expect(enzymeWrapper.find('h2').text()).toEqual(props.venues.headerFullLocation);
    expect(enzymeWrapper.find('Group')).toHaveLength(1);
  });
  
  it('should render a warning in case of few results', () => {
    props.venues.totalResults = 0;
    const enzymeWrapper = mount(<List {...props} />);
    expect(enzymeWrapper.html()).toContain(props.venues.warning.text);
  });
});