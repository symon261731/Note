import axios from 'axios';
import { SET_POST, ADD_POST, DELETE_POST } from '../types';

const setPost = (payload) => ({ type: SET_POST, payload });
const addPost = (payload) => ({ type: ADD_POST, payload });
const deletePost = (payload) => ({ type: DELETE_POST, payload });
// const editPost = (payload) => ({ type: EDIT_POST, payload });

const SERVER_PORT = process.env.REACT_APP_HOST;

export const setPostThunk = (id) => (dispatch) => {
  axios
    .get(`${SERVER_PORT}/post/getAll/${id}`)
    .then((res) => dispatch(setPost(res.data)));
};

export const addPostThunk = (input, id) => (dispatch) => {
  axios
    .post(`${SERVER_PORT}/post/addPost`, { input, id })
    .then((res) => dispatch(addPost(res.data)));
};

export const deletePostThunk = (id) => (dispatch) => {
  axios
    .delete(`${SERVER_PORT}/post/deletePost/${id}`)
    .then(() => dispatch(deletePost(id)));
};
