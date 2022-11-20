import axios from 'axios';
import { SET_NOTE, DELETE_NOTE, ADD_NOTE } from '../types';

export const setNote = (payload) => ({ type: SET_NOTE, payload });
export const deleteNote = (payload) => ({ type: DELETE_NOTE, payload });
export const addNote = (payload) => ({ type: ADD_NOTE, payload });

const SERVER_PORT = process.env.REACT_APP_HOST;

export const setNoteThunk = (userID) => (dispatch) => {
  axios
    .get(`${SERVER_PORT}/note/setNote/${userID}`)
    .then((res) => dispatch(setNote(res.data)))
    .catch(console.log);
};

export const addNoteThunk = (input, user) => (dispatch) => {
  axios.post(`${SERVER_PORT}/note/addNote`, { input, user })
    .then((res) => dispatch(addNote(res.data)))
    .catch(console.log);
};

export const deleteNoteThunk = (id, postID) => (dispatch) => {
  axios
    .delete(`${SERVER_PORT}/note/delete/${id}`, { postID })
    .then(() => dispatch(deleteNote(id)));
};
