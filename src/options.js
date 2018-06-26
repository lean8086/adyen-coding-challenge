/**
 * Text and values to generate <option> elements.
 * The names of the exports are based on Foursquare API params.
 * @see https://developer.foursquare.com/docs/api/venues/explore
 */
export const day = {
  Today: null,
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
  'all the': null,
  cheap: 1,
  affordable: 2,
  reasonable: 3,
  expensive: 4,
}

export const openNow = {
  'are open now': true,
  'don\'t matter if open or not': false,
}
