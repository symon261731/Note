/* eslint-disable default-param-last */
import {
  SET_POST, ADD_POST, DELETE_POST, EDIT_POST,
} from '../types';

export default function postReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_POST: return payload;
    case ADD_POST: return [...state, payload];
    case DELETE_POST: return state.filter((el) => el.id !== payload);
    case EDIT_POST: return payload;
    default: return state;
  }
}
