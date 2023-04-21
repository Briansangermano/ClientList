import { combineReducers } from 'redux';
import { GET_ALL_CLIENTS, DECREMENT_COUNTER } from './types';

const initialState = {
  counter: 0
};

function counterReducer(state = initialState.counter, action) {
  switch (action.type) {
    case GET_ALL_CLIENTS:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  counter: counterReducer
});

export default rootReducer;
