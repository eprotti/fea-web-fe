// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './notificationsSlice.js';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});

export default store;
