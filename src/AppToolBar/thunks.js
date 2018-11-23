import { compose } from 'redux';
import { queue, connected, onlyIf, fallback, voidThunk } from 'handy-thunks';
import { withLoading } from '../Loader';
import { loadUser, preloadUserAvatar, setActive } from '../UserProfile';
import { LOADING } from '../constants';
import { getEditingLogin } from './store';

const ifLoginValid = compose(
  connected(getEditingLogin),
  onlyIf(login => login),
  withLoading(LOADING.USERS),
);

const ignoreErrors = fallback(voidThunk);

export const loadUserProfile = ifLoginValid(
  queue(
    setActive,
    loadUser,
    ignoreErrors(preloadUserAvatar)
  )
);
