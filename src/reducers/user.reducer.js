import {
  USER_AUTHED,
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
      return Object.assign({}, state, {
        user: action.user,
      });
    default:
      return state;
  }
};
