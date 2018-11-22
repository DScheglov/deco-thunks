import { createAction } from 'redux-actions';

const CLEAR_ACTIONS = 'ACTIONS::CLEAR';

export const clearActions = createAction(CLEAR_ACTIONS);

const isInit = ({ type }) => /^@@[^@]*INIT/.test(type);

const allActions = (state = [], action) => (
  action.type === CLEAR_ACTIONS ? [] :
  isInit(action) ? state :
  [...state, action]
);

export const getAllActions = state => state.allActions;

export default allActions;