import initialState from './initialState';
import * as types from './actionTypes';

const repoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_REPO_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case types.GET_REPO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case types.GET_REPO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'Oops, sth went wrong!!',
      };
    default:
      return state;
  }
};

export default repoReducer;
