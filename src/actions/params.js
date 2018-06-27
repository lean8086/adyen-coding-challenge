export const updateParams = (params) => dispatch => {
  dispatch({
    type: 'UPDATE_PARAMS',
    params,
  })
};