import {
    GET_ALL_CLIENTS,
    DECREMENT_COUNTER,
} from './types'

export const getAllClient = () => {
  return { type: GET_ALL_CLIENTS };
}

export const decrementCounter = () => {
  return { type: DECREMENT_COUNTER };
}