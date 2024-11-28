// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from './notificationsSlice.js';
import dataReducer from '../features/dataSlice.js';

const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    data: dataReducer,
  },
});

export default store;
