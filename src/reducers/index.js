const initialState = {
  meta: {},
  venues: [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_VENUES':
      console.log(action.data)
      return {
        ...state,
        venues: action.data.groups,
        meta: {
          headerMessage: action.data.headerMessage,
          headerFullLocation: action.data.headerFullLocation,
          query: action.data.query,
          radius: action.data.suggestedRadius,
        },
      };
    default:
      return state;
  }
};

module.exports = reducers;
