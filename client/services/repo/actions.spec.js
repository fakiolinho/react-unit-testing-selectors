import React from 'react';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import getRepo from './actions';
import * as types from './actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test repo actions', () => {
  afterEach(() => nock.cleanAll());

  describe('test getRepo action', () => {
    it('should dispatch GET_REPO_REQUEST, GET_REPO_SUCCESS when request is successful', () => {
      nock('https://api.github.com/repos/')
      .get('/facebook/react')
      .reply(200, {
        stars: 5,
      });

      const expectedActions = [{
        type: types.GET_REPO_REQUEST,
      }, {
        type: types.GET_REPO_SUCCESS,
        payload: { stars: 5 },
      }];
      const store = mockStore({
        repo: {
          error: '',
          isLoading: false,
          data: {},
        },
      });

      return store.dispatch(getRepo('facebook', 'react'))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
    });

    it('should dispatch GET_REPO_REQUEST, GET_REPO_ERROR when request is unsuccessful', () => {
      nock('https://api.github.com/repos/')
      .get('/facebook/react')
      .reply(500);

      const expectedActions = [{
        type: types.GET_REPO_REQUEST,
      }, {
        type: types.GET_REPO_ERROR,
      }];
      const store = mockStore({
        repo: {
          error: '',
          isLoading: false,
          data: {},
        },
      });

      return store.dispatch(getRepo('facebook', 'react'))
      .then(() => expect(store.getActions()).toEqual(expectedActions));
    });
  });
});
