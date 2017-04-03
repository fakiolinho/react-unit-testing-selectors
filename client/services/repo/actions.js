import fetch from 'isomorphic-fetch';

import * as types from './actionTypes';

const getRepo = (owner, repo) => dispatch => {
  dispatch({
    type: types.GET_REPO_REQUEST,
  });

  return fetch(`https://api.github.com/repos/${owner}/${repo}`)
  .then(res => res.json())
  .then(data => {
    dispatch({
      type: types.GET_REPO_SUCCESS,
      payload: data,
    });
  })
  .catch(() => {
    dispatch({
      type: types.GET_REPO_ERROR,
    });
  });
};

export default getRepo;
