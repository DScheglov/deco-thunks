import api from '../utils/api';
import { save, read } from './store';


export const loadUser = login => dispatch =>
  api()
    .get(`https://api.github.com/users/${login}`)
    .then(read)
    .catch(err => ({ login, error: err.message }))
    .then(save)
    .then(dispatch)
;