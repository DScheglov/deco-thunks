import React from 'react';
import { connect } from 'react-redux';

import { update, getEditingLogin } from './store';


const LoginInput = ({ login, handleLoginChanged }) => (
  <input
    className="form-control"
    type="text"
    placeholder="User Name"
    value={login}
    onChange={handleLoginChanged}
  />
);

const mapState2Props = state => ({
  editingLogin: getEditingLogin(state),
});
const dispatch2Props = { 
  handleLoginChanged: ({ target }) => update(target.value), 
};

export default connect(mapState2Props, dispatch2Props)(LoginInput);
