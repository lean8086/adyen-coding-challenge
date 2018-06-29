import initialState from '../config/initialState';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_VENUES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_VENUES_SUCCESS':
      return {
        ...state,
        venues: action.venues,
        loading: false,
      };
    case 'FETCH_VENUES_ERROR':
      return {
        ...state,
        venues: {},
        loading: false,
        error: action.error,
      };
    case 'UPDATE_PARAMS':
      return {
        ...state,
        venues: {},
        params: {
          ...state.params,
          ...action.params,
        },
      };
    case 'LOCATE':
      return {
        ...state,
        params: {
          ...state.params,
          ll: action.ll,
        },
        located: true,
      };
    default:
      return state;
  }
};

export default reducers;
