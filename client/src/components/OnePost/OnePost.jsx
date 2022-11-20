/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePostThunk } from '../../redux/actions/postActions';

export default function OnePost({ info }) {
  const dispatch = useDispatch();
  return (
    <div className="one-post__item">
      <p className="one-post__post">{info.task}</p>
      <button onClick={() => dispatch(deletePostThunk(info.id))} type="button" className="one-post__btn">delete</button>
    </div>
  );
}
