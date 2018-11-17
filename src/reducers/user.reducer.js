import {
  USER_AUTHED,
  USER_LOGIN,
} from '../constants';


const initialState = {
  username: null,
  password: null,
  name: null,
  authenticated: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_AUTHED:
    case USER_LOGIN: {
      const newUser = Object.assign({}, action.user, {
        authenticated: true,
      });
      return Object.assign({}, state, newUser);
    }
    default:
      return state;
  }
};
