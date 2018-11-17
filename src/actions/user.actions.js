import {
  USER_AUTH,
  USER_LOGIN,
  USER_SIGNUP,
} from '../constants';

export const checkUserAuth = user => ({
  type: USER_AUTH,
  user,
});

export const signupUser = user => ({
  type: USER_SIGNUP,
  user,
});

export const loginUser = user => ({
  type: USER_LOGIN,
  user,
});
