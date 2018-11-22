import React from 'react';
import UserProfile from './UserProfile';
import AppToolBar from './AppToolBar';
import Logger from './ActionsLogger';

import { userName } from './constants';

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <AppToolBar login={userName} />
        <UserProfile login={userName} />
      </div>
      <div className="col-md-8">
        <Logger />
      </div>
    </div>
  </div>
);

export default App;
