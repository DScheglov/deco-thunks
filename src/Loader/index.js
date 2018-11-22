import Loader from './Loader';
import loaders, { start, end, isLoading } from './store';
import { withLoading } from './thunks';

export const reducers = { loaders };

export default Loader;
export { start, end, withLoading, isLoading };