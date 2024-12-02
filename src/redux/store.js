import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userReducer.js';
import documentsReducer from '../reducers/documentReducers.js'
import notificationReducer from '../reducers/notificationReducers.js'

const store = configureStore({
  reducer: {
    notifications: notificationReducer,
    user: userReducer,
    documents: documentsReducer,
  },
});

export default store;
