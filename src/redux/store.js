// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './notificationsSlice.js';
import dataReducer from '../features/dataSlice.js';
import userReducer from '../reducers/userReducer.js';
import documentsReducer from '../reducers/documentReducers.js'

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    data: dataReducer,
    user: userReducer,
    documents: documentsReducer,
  },
});

export default store;
