import createStore from './utils/create-store';

import * as Logger from './ActionsLogger';
import * as Users from './UserProfile';
import * as App from './AppToolBar';

export default createStore({
  ...Logger.reducers,
  ...Users.reducers,
  ...App.reducers,
});
