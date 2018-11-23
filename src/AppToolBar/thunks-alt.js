import { start, end } from '../Loader';
import { loadUser } from '../UserProfile';
import { LOADING } from '../constants';

export const loadUserProfile = login => async dispatch => {
  dispatch(
    start(LOADING.USERS)
  );

  try {
    await dispatch(
      loadUser(login)
    );
  } catch (err) {
    // do nothing here -- loadUser has already saved an error.
  }

  dispatch(
    end(LOADING.USERS)
  );
};
