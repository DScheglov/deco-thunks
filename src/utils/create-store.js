import { createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import enhanceWith from './enhance-with-dev-tools';


export default (reducers, initialState) => createStore(
  combineReducers(reducers),
  initialState,
  enhanceWith(thunk)
);
