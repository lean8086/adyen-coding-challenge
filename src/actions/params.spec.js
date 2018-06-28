import * as actions from './params';

describe('Params actions', () => {
  it('should create an action to update a param', () => {
    const params = { test: 'test' };
    const expectedAction = {
      type: 'UPDATE_PARAMS',
      params,
    };
    expect(actions.updateParams(params)).toEqual(expectedAction);
  });
});