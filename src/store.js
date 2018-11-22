import createStore from './utils/create-store';

import * as Logger from './ActionsLogger';
import * as Users from './UserProfile';

export default createStore({
  ...Logger.reducers,
  ...Users.reducers,
});
