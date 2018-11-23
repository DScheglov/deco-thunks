import React from 'react';
import UserProfile from './UserProfile';
import AppToolBar from './AppToolBar';
import Logger from './ActionsLogger';


const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <AppToolBar />
        <UserProfile />
      </div>
      <div className="col-md-8">
        <Logger />
      </div>
    </div>
  </div>
);

export default App;
