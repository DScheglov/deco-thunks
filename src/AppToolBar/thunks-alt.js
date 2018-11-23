import { start, end } from '../Loader';
import { loadUser, preloadUserAvatar, setActive } from '../UserProfile';
import { LOADING } from '../constants';
import { getEditingLogin } from './store';

export const loadUserProfile = () => async (dispatch, getState) => {
  const state = getState();
  const login = getEditingLogin(state);

  if (!login) return;

  dispatch(
    start(LOADING.USERS)
  );

  dispatch(
    setActive(login)
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
