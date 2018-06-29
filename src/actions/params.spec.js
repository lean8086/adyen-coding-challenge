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
  
  it('should create an action to locate the user', () => {
    const ll = 'test';
    const expectedAction = {
      type: 'LOCATE',
      ll,
    };
    expect(actions.locate(ll)).toEqual(expectedAction);
  });
});