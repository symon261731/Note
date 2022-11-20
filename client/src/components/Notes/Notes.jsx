/* eslint-disable max-len */
import React, { useEffect } from 'react';
import './Notes.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNoteThunk, deleteNoteThunk } from '../../redux/actions/noteActions';

export default function Notes() {
  const note = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(setNoteThunk(user.id));
  }, []);
  return (
    <div className="notes">
      <div className="notes__content">
        <h2 className="notes__title">ЗАМЕТКИ</h2>
        <div className="notes__cards">
          { note?.map((el) => (
            <div key={el.id} className="notes__item">
              <div className="notes__content-cards">
                <Link className="notes__card" to={`/onePost/${el.id}`}>
                  <p className="notes__text">{el.name}</p>
                </Link>
                <button onClick={() => dispatch(deleteNoteThunk(el.id))} type="button" className="notes__btn">delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
