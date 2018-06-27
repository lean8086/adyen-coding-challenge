/**
 * Text and values to generate <option> elements.
 * The names of the exports are based on Foursquare API params.
 * @see https://developer.foursquare.com/docs/api/venues/explore
 */
export default {
  day: {
    Today: '',
    'Someday': 'any',
  },
  section: {
    food: 'food',
    drinks: 'drinks',
    coffee: 'coffee',
    shops: 'shops',
    arts: 'arts',
    outdoors: 'outdoors',
    sights: 'sights',
  },
  price: {
    'all the': '1,2,3,4',
    cheap: '1',
    affordable: '1,2',
    reasonable: '2,3',
    expensive: '3,4',
  },
  openNow: {
    'are open now': 1,
    'may be open or not': 0,
  },
  radius: {
    '20 blocks': 2000,
    '15 blocks': 1500,
    '10 blocks': 1000,
    '5 blocks': 500,
  },
};