import { compose } from 'redux';
import { queue, connected } from 'handy-thunks';
import { withLoading } from '../Loader';
import { loadUser, preloadUserAvatar, setActive } from '../UserProfile';
import { LOADING } from '../constants';
import { getEditingLogin } from './store';

const enhance = compose(
  withLoading(LOADING.USERS),
  connected(getEditingLogin),
);

export const loadUserProfile = enhance(
  queue(
    setActive,
    loadUser,
    preloadUserAvatar
  )
);

// TODO: resolve issue:
//   On failed loading the error message:
//   "Uncaught (in promise) Error: Couldn't preload image by url undefined."
//   is printed to console