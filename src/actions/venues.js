import { get } from 'axios';
import { foursquareAPI } from '../config/api';

export const fetchVenuesRequest = () => ({
  type: 'FETCH_VENUES_REQUEST',
});

export const fetchVenuesSuccess = (venues) => ({
  type: 'FETCH_VENUES_SUCCESS',
  venues,
});

export const fetchVenuesError = (error) => ({
  type: 'FETCH_VENUES_ERROR',
  error,
});

export const fetchVenues = (params) => dispatch => {
  dispatch(fetchVenuesRequest());
  return get(foursquareAPI.url, {
    params: {
      ...foursquareAPI.params,
      ...params,
    }
  })
    .then(res => dispatch(fetchVenuesSuccess(res.data.response)))
    .catch(error => dispatch(fetchVenuesError(error)));
};
