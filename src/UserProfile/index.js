import * as Loader from '../Loader';
import UserProfile from './UserProfile';
import users, { save } from './store';
import { loadUser, preloadUserAvatar } from './thunks';

export const reducers = {
  users,
  ...Loader.reducers,
};

export default UserProfile;
export { save, loadUser, preloadUserAvatar };
