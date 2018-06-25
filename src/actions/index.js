const axios = require('axios');
const { urls, params } = require('../config');

export const listVenues = () => dispatch => (
  axios.get(urls.venues, {
    params: {
      ...params,
      v: "20180323",
      ll: "40.7243,-74.0018",
      query: "coffee",
      limit: 1,
    }
  })
    .then(res => dispatch({
      type: 'LIST_VENUES',
      data: res.data.response,
    }))
);