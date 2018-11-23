import { createAction, handleActions } from 'redux-actions';
import { combineReducers } from 'redux';

const SAVE = 'USERS::SAVE';
const SET_ACTIVE = 'USERS::SET-ACTIVE';

export const save = createAction(SAVE);
export const setActive = createAction(SET_ACTIVE);

export const read = ({ id, login, name, location, company, html_url, avatar_url }) => ({
  id, login, name, location, company,
  url: html_url,
  avatarUrl: avatar_url,
});

const all = handleActions({
  [SAVE]: (state, { payload }) => ({
    ...state,
    [payload.login.toLowerCase()]: payload,
  })
}, {});

const active = handleActions({
  [SET_ACTIVE]: (state, { payload }) => payload,
}, '');

const users = combineReducers({ all, active });

export default users;

export const getUserByLogin = (state, login = state.users.active) => (
  login && state.users.all[login.toLowerCase()] || null
);

export const getActiveUserLogin = state => state.users.active;
