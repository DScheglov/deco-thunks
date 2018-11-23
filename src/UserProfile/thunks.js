import api from '../utils/api';
import { save, read, getUserByLogin } from './store';
import { preloadImage } from '../utils/preload-image';


export const loadUser = login => dispatch =>
  api()
    .get(`https://api.github.com/users/${login}`)
    .then(read)
    .catch(err => ({ login, error: err.message }))
    .then(save)
    .then(dispatch)
;

export const preloadUserAvatar = login => async (dispatch, getState) => {
  const state = getState();
  const user = getUserByLogin(state, login);
  
  if (user == null) {
    return null;
  }

  return preloadImage(user.avatarUrl);
};