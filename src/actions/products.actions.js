import { INIT } from '../constants';

// Check the user's authentication
export const initApp = () => ({
  type: INIT,
});

export const setProducts = data => ({
  type: 'SET_PRODUCTS',
  data,
});

export const other = () => ({});
