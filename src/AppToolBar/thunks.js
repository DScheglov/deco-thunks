import { withLoading } from '../Loader';
import { loadUser } from '../UserProfile';
import { LOADING } from '../constants';

export const loadUserProfile = withLoading(LOADING.USERS)(
  loadUser
);
