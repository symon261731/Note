import axios from 'axios';
import { LOGOUT_USER, SIGN_USER } from '../types';

const SERVER_PORT = process.env.REACT_APP_HOST;

export const setUser = (payload) => ({ type: SIGN_USER, payload });
export const logout = () => ({ type: LOGOUT_USER });

export const signUpUserThunk = (inputs) => (dispatch) => {
  axios
    .post(`${SERVER_PORT}/user/signup`, { inputs })
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log);
};

export const loginUserThunk = (inputs) => (dispatch) => {
  console.log('in login');
  axios
    .post(`${SERVER_PORT}/user/login`, { inputs })
    .then((res) => dispatch(setUser(res.data)))
    .catch(console.log);
};

export const logoutUserThunk = () => (dispatch) => {
  axios
    .get(`${SERVER_PORT}/user/logout`)
    .then(() => dispatch(logout()))
    .catch(console.log);
};

export const checkUserThunk = () => (dispatch) => {
  axios
    .post(`${SERVER_PORT}/user/check`).then((res) => dispatch(setUser({ ...res.data, loading: false })))
    .catch(() => dispatch(setUser({ loading: false })));
};
