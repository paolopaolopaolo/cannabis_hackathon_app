import {
  USER_AUTH,
  USER_LOGIN,
  USER_SIGNUP,
} from '../constants';

// Check the user's authentication
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

// Authenticated the user
export const userAuthed = user => ({
  type: USER_AUTH,
  user,
});
