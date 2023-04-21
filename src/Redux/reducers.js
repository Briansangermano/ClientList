import { SET_IS_FECHING, SET_CLIENTS } from './types';

const initialState = {
  clients: [],
  isFeching: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_FECHING:
      return {
        ...state,
        isFeching: true,
      }
    case SET_CLIENTS: 
      return {
        ...state,
        clients: action.payload,
        isFeching: false,
      };
    default:
      return state;
  }
}

export default rootReducer;
