/* eslint-disable default-param-last */
import { SET_USER, SIGN_USER, LOGOUT_USER } from '../types';

export default function userReducer(state = { loading: true }, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_USER: return payload;
    case SIGN_USER: return payload;
    case LOGOUT_USER: return {};
    default: return state;
  }
}
