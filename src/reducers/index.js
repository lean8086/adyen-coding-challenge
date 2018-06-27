import initialState from '../config/initialState';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_VENUES':
    console.log(action.venues);
      return {
        ...state,
        venues: action.venues,
      };
    case 'UPDATE_PARAMS':
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params,
        },
      };
    default:
      return state;
  }
};

export default reducers;
