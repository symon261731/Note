import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Notes from '../Notes/Notes';
import Form from '../Form/Form';
import './null.scss';
import './home.scss';
// import { setNoteThunk } from '../../redux/actions/noteActions';
// import { checkUserThunk } from '../../redux/actions/userActions';

export default function Home() {
  // const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // useEffect(() => {
  //   dispatch(setNoteThunk(user.id));
  // }, []);
  return (
    <main className="main" style={{ flex: '1 1 auto' }}>
      { !user?.id ? (
        <>
          <Link to="/reg" className="main__title">Зарегистрируйтесь, чтобы продолжить </Link>
          <Link to="/Login" className="main__title">Уже сейчас аккаунт, тогда вам сюда</Link>
        </>
      ) : null}
      <div className="main__flex" style={{ display: 'flex' }}>
        {user?.id ? (<Notes />) : null}
        {user?.id ? (<Form />) : (null)}
      </div>
    </main>
  );
}
