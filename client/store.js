import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import { loadState, saveState } from 'services/utils/localStorage';
import repo from 'services/repo/reducer';

const persistedState = loadState();
const rootReducer = combineReducers({
  repo,
});
// Enable Redux Devtools in development env only
const composeEnhancers = process.env.NODE_ENV === 'development' ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  saveState({
    repo: store.getState().repo,
  });
});

export default store;
