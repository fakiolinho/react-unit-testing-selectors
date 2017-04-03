import * as types from './actionTypes';
import reducer from './reducer';

describe('test repo reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      error: '',
      isLoading: false,
      data: {},
    });
  });

  it('should handle GET_REPO_REQUEST', () => {
    expect(
      reducer({
        error: 'Some error',
        isLoading: false,
        data: {},
      }, {
        type: types.GET_REPO_REQUEST,
      })
    ).toEqual({
      error: '',
      isLoading: true,
      data: {},
    });
  });

  it('should handle GET_REPO_SUCCESS', () => {
    expect(
      reducer({
        error: '',
        isLoading: false,
        data: {},
      }, {
        type: types.GET_REPO_SUCCESS,
        payload: {
          stars: 5,
        },
      })
    ).toEqual({
      error: '',
      isLoading: false,
      data: {
        stars: 5,
      },
    });
  });

  it('should handle GET_REPO_ERROR', () => {
    expect(
      reducer({
        error: '',
        isLoading: false,
        data: {},
      }, {
        type: types.GET_REPO_ERROR,
      })
    ).toEqual({
      error: 'Oops, sth went wrong!!',
      isLoading: false,
      data: {},
    });
  });
});
