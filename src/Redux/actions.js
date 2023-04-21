import {
    SET_IS_FECHING,
    SET_CLIENTS,
} from './types';

export const setIsFeching = () => {
  return { type: SET_IS_FECHING };
}

export const setClients = (data) => {
  return { type: SET_CLIENTS, payload: data };
}