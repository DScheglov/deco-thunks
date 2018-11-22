import { loading } from 'handy-thunks';
import { start, end } from './store';

export const withLoading = loading(start, end);