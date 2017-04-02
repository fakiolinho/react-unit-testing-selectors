import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { loadState, saveState } from 'services/utils/localStorage';
import repos from 'services/repos/reducer';

const persistedState = loadState();
const rootReducer = combineReducers({
  repos,
});
const store = createStore(
  rootReducer,
  persistedState,
  compose(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState({
    repos: store.getState().repos,
  });
});

export default store;
