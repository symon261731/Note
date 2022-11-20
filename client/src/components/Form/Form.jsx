/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Form.scss';
import { addNoteThunk } from '../../redux/actions/noteActions';

export default function Form() {
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const user = useSelector((state) => state.user);

  const changehandler = (e) => setInput(e.target.value);
  return (
    <div className="form">
      <div className="form__content" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addNoteThunk(input, user));
        }}
        className="form__main"
      >
        <label htmlFor="form__input" className="form__label">
          Введите заметку
        </label>
        <input name="name" type="text" onChange={changehandler} value={input} className="form__input" />
        <button type="submit" className="form__btn">Добавить</button>
      </form>
    </div>
  );
}
