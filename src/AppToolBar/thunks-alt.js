import { start, end } from '../Loader';
import { loadUser, preloadUserAvatar } from '../UserProfile';
import { LOADING } from '../constants';

export const loadUserProfile = login => async dispatch => {
  dispatch(
    start(LOADING.USERS)
  );

  try {
    await dispatch(
      loadUser(login)
    );

    await dispatch(
      preloadUserAvatar(login)
    );
  } catch (err) {
    // do nothing here
    //   -- loadUser has already saved an error.
    //   -- just ignoring preloadUserAvatar exceptions
  }

  dispatch(
    end(LOADING.USERS)
  );
};
