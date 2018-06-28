import reducer from './';
import initialState from '../config/initialState';

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_VENUES_REQUEST', () => {
    expect(
      reducer({}, {
        type: 'FETCH_VENUES_REQUEST',
      })
    ).toEqual({
      loading: true,
      error: null,
    });

    expect(
      reducer(initialState, {
        type: 'FETCH_VENUES_REQUEST',
      })
    ).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  it('should handle FETCH_VENUES_SUCCESS', () => {
    expect(
      reducer({}, {
        type: 'FETCH_VENUES_SUCCESS',
        venues: 'test',
      })
    ).toEqual({
      venues: 'test',
      loading: false,
    });

    expect(
      reducer(initialState, {
        type: 'FETCH_VENUES_SUCCESS',
        venues: 'test',
      })
    ).toEqual({
      ...initialState,
      venues: 'test',
      loading: false,
    });
  });

  it('should handle FETCH_VENUES_ERROR', () => {
    expect(
      reducer({}, {
        type: 'FETCH_VENUES_ERROR',
        error: 'test',
      })
    ).toEqual({
      venues: {},
      error: 'test',
      loading: false,
    });

    expect(
      reducer(initialState, {
        type: 'FETCH_VENUES_ERROR',
        error: 'test',
      })
    ).toEqual({
      ...initialState,
      venues: {},
      error: 'test',
      loading: false,
    });
  });

  it('should handle UPDATE_PARAMS', () => {
    expect(
      reducer({}, {
        type: 'UPDATE_PARAMS',
        params: {
          test: 'test',
        },
      })
    ).toEqual({
      venues: {},
      params: {
        test: 'test',
      },
      loading: true,
    });

    expect(
      reducer(initialState, {
        type: 'UPDATE_PARAMS',
        params: {
          test: 'test',
        },
      })
    ).toEqual({
      ...initialState,
      venues: {},
      params: {
        ...initialState.params,
        test: 'test',
      },
      loading: true,
    });
  });
});