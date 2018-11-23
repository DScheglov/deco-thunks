import { createAction, handleActions } from 'redux-actions';

const UPDATE = 'ACTIVE-USER::UPDATE-EDITING-LOGIN';

export const update = createAction(UPDATE);


const editingLogin = handleActions({
  [UPDATE]: (state, { payload }) => payload,
}, '');

export default editingLogin;

export const getEditingLogin = state => state.editingLogin;