import { configureStore } from '@reduxjs/toolkit';
import postReducer from './reduces/postReducer';
import userReducer from './reduces/userReducer';
import noteReducer from './reduces/noteReducer';

export default configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,
    note: noteReducer,
  },
});
