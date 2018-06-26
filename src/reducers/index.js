const initialState = {
  venues: [],
  error: null,
  isLoaded: false,
  params: {
    day: null,
    section: 'food',
    radius: 500,
    price: 2,
    openNow: true,
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VENUES':
      return {
        ...state,
        venues: action.data.groups,
      };
    default:
      return state;
  }
};

export default reducers;
