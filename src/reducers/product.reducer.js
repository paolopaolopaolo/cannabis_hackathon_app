import { INIT } from '../constants';


const initialState = {
  all: [],
  ids: [],
};

const fakeProducts = [
  {
    id: 1,
    name: 'Holiday Calm Kit',
    distributor: 'dosist',
    price: 59.99,
  },
  {
    id: 2,
    name: 'chocolate covered blueberries',
    distributor: 'kiva',
    price: 19.99,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT:
      return Object.assign({}, state, {
        all: fakeProducts,
        ids: fakeProducts.map(item => item.id),
      });
    case 'SET_PRODUCTS':
      return {
        ...state,
        all: action.data,
        ids: action.data.map(item => item.id)
      }
    default:
      return state;
  }
};
