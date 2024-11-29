// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './notificationsSlice.js';
import dataReducer from '../features/dataSlice.js';
import userReducer from '../reducers/userReducer.js';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    data: dataReducer,
    user: userReducer,
  },
});

export default store;
