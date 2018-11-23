import React from 'react';
import { connect } from 'react-redux';

import { update, getEditingLogin } from './store';
import { loadUserProfile } from './thunks';
import { handleWith } from '../utils/handlers';


const LoginInput = ({ login, updateLogin, loadUserProfile }) => (
  <input
    className="form-control"
    type="text"
    placeholder="User Name"
    value={login}
    onChange={handleWith(
      updateLogin,
      loadUserProfile
    )}
  />
);

const mapState2Props = state => ({
  editingLogin: getEditingLogin(state),
});

const dispatch2Props = { 
  updateLogin: ({ target }) => update(target.value),
  loadUserProfile
};

export default connect(mapState2Props, dispatch2Props)(LoginInput);
