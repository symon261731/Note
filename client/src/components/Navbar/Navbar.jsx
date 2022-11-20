/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../../redux/actions/userActions';

export default function Navbar() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="header__container">
      <nav className="header__menu menu">
        <ul className="menu__list">
          <div className="menu__path">
            <Link to="/" className="menu__item">Home</Link>
            {(!user?.id ? (
              <>
                <Link to="/reg" className="menu__item">SignUp</Link>
                <Link to="/login" className="menu__item">Login</Link>
              </>
            ) : null)}
          </div>
          <div className="menu__path">

            {user?.id ? (
              <>
                <Link to="/settings" className="menu__item">Settings</Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(logoutUserThunk());
                    navigate('/');
                  }}
                  type="button"
                  className="menu__logout"
                >
                  Logout
                </button>
              </>
            ) : null}
          </div>
        </ul>
      </nav>
    </div>

  );
}
