import 'babel-polyfill';
import request from 'services/utils/request';

import * as types from './actionTypes';

const getRepo = (owner, repo) => async dispatch => {
  try {
    dispatch({
      type: types.GET_REPO_REQUEST,
    });

    const { data } = await request.get(
      `https://api.github.com/repos/${owner}/${repo}`,
    );

    dispatch({
      type: types.GET_REPO_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: types.GET_REPO_ERROR,
    });
  }
};

export default getRepo;
