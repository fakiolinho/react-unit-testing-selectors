import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { loadState, saveState } from 'services/utils/localStorage';
import repo from 'services/repo/reducer';

const persistedState = loadState();
const rootReducer = combineReducers({
  repo,
});
const store = createStore(
  rootReducer,
  persistedState,
  compose(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState({
    repo: store.getState().repo,
  });
});

export default store;
