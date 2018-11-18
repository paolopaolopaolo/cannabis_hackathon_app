import { INIT } from '../constants';


const initialState = {
  all: [],
  ids: [],
};


export default (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state, {
        all: [],
        ids: [],
      });
    case 'SET_PRODUCTS':
      return {
        ...state,
        all: action.data,
        ids: action.data.map(item => item.id),
      };
    default:
      return state;
  }
};
