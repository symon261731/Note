/* eslint-disable default-param-last */
import { SET_NOTE, DELETE_NOTE, ADD_NOTE } from '../types';

export default function noteReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_NOTE: return payload;
    case ADD_NOTE: return [...state, payload];
    case DELETE_NOTE: return state.filter((el) => el.id !== payload);
    default: return state;
  }
}
