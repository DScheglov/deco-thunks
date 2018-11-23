import React from 'react';

import LoginInput from './LoginInput';
import { prevent } from '../utils/handlers';


const AppToolBar = () => (
  <form className="card--fixed_width" onSubmit={prevent}>
    <div className="form-group row">
      <div className="col-sm">
        <LoginInput />
      </div>
    </div>
  </form>
);


export default AppToolBar;
