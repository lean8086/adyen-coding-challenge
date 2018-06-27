/**
 * Text and values to generate <option> elements.
 * The names of the exports are based on Foursquare API params.
 * @see https://developer.foursquare.com/docs/api/venues/explore
 */
export const day = {
  Today: '',
  'One day': 'any',
};

export const section = {
  food: 'food',
  drinks: 'drinks',
  coffee: 'coffee',
  shops: 'shops',
  arts: 'arts',
  outdoors: 'outdoors',
  sights: 'sights',
  'trending places': 'trending',
};

export const radius = {
  '5 blocks': 500,
  '10 blocks': 1000,
  '15 blocks': 1500,
  '20 blocks': 2000,
}

export const price = {
  'all the': '1,2,3,4',
  cheap: '1',
  affordable: '1,2',
  reasonable: '2,3',
  expensive: '3,4',
}

export const openNow = {
  'are open now': 1,
  'don\'t matter if open or not': 0,
}
