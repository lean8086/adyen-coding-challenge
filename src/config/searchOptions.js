/**
 * Text and values to generate <option> elements.
 * The names of the exports are based on Foursquare API params.
 * @see https://developer.foursquare.com/docs/api/venues/explore
 */
export default {
  day: {
    Today: '',
    Someday: 'any',
  },
  section: {
    'drink some coffee': 'coffee',
    'eat some food': 'food',
    'have a drink': 'drinks',
    'go shopping': 'shops',
    'see something artsy': 'arts',
    'explore sights': 'sights',
  },
  price: {
    'all the': '1,2,3,4',
    affordable: '1,2',
    cheap: '1',
    reasonable: '2,3',
    pricey: '3,4',
  },
  openNow: {
    'are open now': 1,
    'may be open or not': 0,
  },
  radius: {
    '5 blocks': 500,
    '10 blocks': 1000,
    '20 blocks': 2000,
    '40 blocks': 4000,
    'a galaxy far far': 10000,
  },
};