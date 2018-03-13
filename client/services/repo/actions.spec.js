import 'babel-polyfill';
import React from 'react';

import request from '../utils/request';
import getRepo from './actions';
import * as types from './actionTypes';

describe('test repo actions', () => {
  it('should dispatch GET_REPO_REQUEST, GET_REPO_SUCCESS when request is successful', async () => {
    const dispatch = jest.fn();

    request.get = jest.fn(() =>
      Promise.resolve({
        data: {
          stars: 5,
        },
      }),
    );

    await getRepo('facebook', 'react')(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual({
      type: types.GET_REPO_REQUEST,
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: types.GET_REPO_SUCCESS,
      payload: {
        stars: 5,
      },
    });
  });

  it('should dispatch GET_REPO_ERROR when request fails', async () => {
    const dispatch = jest.fn();

    request.get = jest.fn(() => Promise.reject());

    await getRepo('facebook', 'react')(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual({
      type: types.GET_REPO_REQUEST,
    });
    expect(dispatch.mock.calls[1][0]).toEqual({
      type: types.GET_REPO_ERROR,
    });
  });
});
