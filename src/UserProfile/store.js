import { createAction, handleActions } from 'redux-actions';

const SAVE = 'USERS::SAVE';

export const save = createAction(SAVE);

export const read = ({ id, login, name, location, company, html_url, avatar_url }) => ({
  id, login, name, location, company,
  url: html_url,
  avatarUrl: avatar_url,
});

const users = handleActions({
  [SAVE]: (state, { payload }) => ({
    ...state,
    [payload.login.toLowerCase()]: payload,
  })
}, {});

export default users;

export const getUserByLogin = (state, login) => (
  login && state.users[login.toLowerCase()] || null
);
