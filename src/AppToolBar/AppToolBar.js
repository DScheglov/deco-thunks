import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { loadUserProfile } from './thunks';

import LoginInput from './LoginInput';
import { prevent } from '../utils/handlers';


const AppToolBar = ({ loadUserProfile }) => (
  <form className="card--fixed_width" onSubmit={loadUserProfile}>
    <div className="form-group row">
      <div className="col-sm">
        <LoginInput />
      </div>
    </div>
  </form>
);

const actions = {
  loadUserProfile: compose(loadUserProfile, prevent),
};

export default connect(null, actions)(AppToolBar);
