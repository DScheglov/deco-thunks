import { compose } from 'redux';
import { queue, connected, onlyIf, fallback, voidThunk, all, postponed } from 'handy-thunks';
import { withLoading } from '../Loader';
import { loadUser, preloadUserAvatar, setActive, loginOfNewUser } from '../UserProfile';
import { LOADING, DELAY_BEFORE_REQUEST } from '../constants';
import { getEditingLogin } from './store';

const ifLoginValid = compose(
  postponed(DELAY_BEFORE_REQUEST),
  connected(getEditingLogin),
  onlyIf(login => login),
);
  
const onlyIfUserIsNew = compose(
  connected(loginOfNewUser),
  onlyIf(login => login),
  withLoading(LOADING.USERS),
);

const ignoreErrors = fallback(voidThunk);

export const loadUserProfile = ifLoginValid(
  all(
    setActive,
    onlyIfUserIsNew(
      queue(
        loadUser,
        ignoreErrors(preloadUserAvatar)
      )
    )
  )
);
