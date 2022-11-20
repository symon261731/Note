import React, { useState } from 'react';
import './FormForPost.scss';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addPostThunk } from '../../redux/actions/postActions';

export default function FormForPost() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const changeHandler = (e) => setInput(e.target.value);

  return (
    <div className="one-post__container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addPostThunk(input, id));
        }}
        className="one-post__form form-post"
      >
        <p className="form-post__label">Добавить запись</p>
        <input value={input} id="form-post-input" onChange={changeHandler} type="text" className="form-post__input" />
        <button type="submit" className="form-post__button">Добавить</button>
      </form>
    </div>
  );
}
