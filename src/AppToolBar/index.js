import React from 'react';
import { connect } from 'react-redux';

import { loadUserProfile } from './thunks-alt';

import BtnLoad from './BtnLoad';

const AppToolBar = ({ login, loadUserProfile }) => (
  <form className="card--fixed_width">
    <div className="form-group row">
      <div className="col-sm">
        <div className="row">
          <div className="col-sm" />
          <div className="col-sm-4 text-right">
            <BtnLoad onClick={() => loadUserProfile(login) } />
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default connect(null, { loadUserProfile })(AppToolBar);
