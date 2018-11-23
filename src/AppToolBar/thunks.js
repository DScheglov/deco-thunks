import { queue } from 'handy-thunks';
import { withLoading } from '../Loader';
import { loadUser, preloadUserAvatar } from '../UserProfile';
import { LOADING } from '../constants';

export const loadUserProfile = withLoading(LOADING.USERS)(
  queue(
    loadUser,
    preloadUserAvatar
  )
);
