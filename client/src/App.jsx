import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkUserThunk } from './redux/actions/userActions';
import Navbar from './components/Navbar/Navbar';
import Reg from './components/Registration/Reg/Reg';
import Login from './components/Registration/Login/Login';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Settings from './components/Settings/Settings';
import PrivateRouter from './components/Private/PrivateRouter';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(checkUserThunk());
  }, []);
  return !user.loading ? (
    <div className="wrapper" style={{ display: 'flex' }}>
      <header className="header" style={{ flex: '0 0 10%' }}>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/Login" element={<Login />} />
        <Route path="onePost/:id" element={<PrivateRouter isAllowed={user.id} redirect="/"><Posts /></PrivateRouter>} />
        <Route path="/settings" element={<PrivateRouter isAllowed={user.id} redirect="/"><Settings /></PrivateRouter>} />
      </Routes>
    </div>
  ) : (<span>Загружаюсь</span>);
}

export default App;
