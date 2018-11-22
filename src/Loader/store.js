import { createAction, handleActions } from 'redux-actions';

import { include, exclude } from '../utils/helpers';

const [START, END] = ['LOADING::START', 'LOADING::END'];

export const start = createAction(START);
export const end = createAction(END);

const loaders = handleActions({
  [START]: (state, { payload }) => include(state, payload),
  [END]: (state, { payload }) => exclude(state, payload),
}, []);

export default loaders;

export const isLoading = (state, loaderId) => state.loaders.includes(loaderId);