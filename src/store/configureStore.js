import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import entriesReducer from "../reducers/entries.reducers";
import modalReducer from "../reducers/modals.reducers";
import createSagaMiddleware from 'redux-saga'
import {initSagas } from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const configureStore = () => {
  const combineAllReducers = combineReducers({
    entries: entriesReducer,
    modals: modalReducer,
  });

  const store = createStore(combineAllReducers, composeWithDevTools(applyMiddleware(...middlewares)));
  console.log("store.getState() before::", store.getState());
  // return store;
  initSagas(sagaMiddleware);
  return store
};

export default configureStore;
