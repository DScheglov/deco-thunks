import { compose } from 'redux';
import { queue, connected, onlyIf } from 'handy-thunks';
import { withLoading } from '../Loader';
import { loadUser, preloadUserAvatar, setActive } from '../UserProfile';
import { LOADING } from '../constants';
import { getEditingLogin } from './store';

const ifLoginValid = compose(
  connected(getEditingLogin),
  onlyIf(login => login),
  withLoading(LOADING.USERS),
);

export const loadUserProfile = ifLoginValid(
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