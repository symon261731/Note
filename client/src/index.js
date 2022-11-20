/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
axios.defaults.withCredentials = true;
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
