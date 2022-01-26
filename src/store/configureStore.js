import { createStore, combineReducers } from "redux";
import { entriesReducer } from "../reducers/entries.reducers";

const configuredStore = () => {
  const combineAllReducers = combineReducers({
    entries: entriesReducer,
  });

  const store = createStore(combineAllReducers);
  console.log("store.getState() before::", store.getState());
  return store;
};

export default configuredStore;






























