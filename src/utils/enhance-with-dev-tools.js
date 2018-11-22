import { applyMiddleware, compose } from 'redux';

const { __REDUX_DEVTOOLS_EXTENSION__ } = global;
const __DEV__ = process.env.NODE_ENV !== 'production';

const withDevTools = enhancers => (
  __DEV__ && __REDUX_DEVTOOLS_EXTENSION__
    ? compose(enhancers, __REDUX_DEVTOOLS_EXTENSION__())
    : enhancers
);

export default compose(withDevTools, applyMiddleware);