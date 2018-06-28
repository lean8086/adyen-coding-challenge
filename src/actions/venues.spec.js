// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import fetchMock from 'fetch-mock'
import * as actions from './venues';
// import { foursquareAPI } from '../config/api';

// const mockStore = configureMockStore([thunk]);

describe('Venues actions', () => {
  it('should create an action to start a request', () => {
    const expectedAction = {
      type: 'FETCH_VENUES_REQUEST',
    };
    expect(actions.fetchVenuesRequest()).toEqual(expectedAction);
  });
  
  it('should create an action to get venues successfully', () => {
    const venues = { test: 'test' };
    const expectedAction = {
      type: 'FETCH_VENUES_SUCCESS',
      venues,
    };
    expect(actions.fetchVenuesSuccess(venues)).toEqual(expectedAction);
  });
  
  it('should create an action to catch errors', () => {
    const error = { test: 'test' };
    const expectedAction = {
      type: 'FETCH_VENUES_ERROR',
      error,
    };
    expect(actions.fetchVenuesError(error)).toEqual(expectedAction);
  });
  
  // it('should create FETCH_VENUES_SUCCESS when fetching has been done', () => {
  //   fetchMock.getOnce(foursquareAPI.url + '?section=coffee&radius=500&price=1,2&openNow=1&ll50,50', {
  //     body: { venues: { test: 'test' } },
  //     headers: { 'content-type': 'application/json' },
  //   });
  // 
  //   const expectedActions = [
  //     { type: 'FETCH_VENUES_REQUEST' },
  //     {
  //       type: 'FETCH_VENUES_SUCCESS',
  //       body: { venues: { test: 'test' } },
  //     },
  //   ];
  //   const store = mockStore({ venues: {} });
  //   return store.dispatch(actions.fetchVenues({ ll: '50,50' })).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //     fetchMock.reset();
  //     fetchMock.restore();
  //   });
  // });
});