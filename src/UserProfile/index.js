import * as Loader from '../Loader';
import UserProfile from './UserProfile';
import users, { save, setActive } from './store';
import { loadUser, preloadUserAvatar } from './thunks';

export const reducers = {
  users,
  ...Loader.reducers,
};

export default UserProfile;
export { save, setActive, loadUser, preloadUserAvatar };
