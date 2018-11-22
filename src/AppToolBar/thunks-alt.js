import { start, end } from '../Loader';
import { loadUser } from '../UserProfile';
import { LOADING } from '../constants';

export const loadUserProfile = login => async dispatch => {
  dispatch(
    start(LOADING.USERS)
  );

  await dispatch(
    loadUser(login)
  );

  dispatch(
    end(LOADING.USERS)
  );
};
