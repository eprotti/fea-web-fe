// src/redux/notificationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  unreadCount: 0,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.notifications.push(action.payload);
      state.unreadCount += 1;
    },
    markAsRead: (state, action) => {
      const notificationIndex = state.notifications.findIndex(
        (notification) => notification.id === action.payload
      );
      if (notificationIndex !== -1) {
        state.notifications[notificationIndex].read = true;
        state.unreadCount -= 1;
      }
    },
    markAllAsRead: (state) => {
      state.notifications.forEach((notification) => {
        notification.read = true;
      });
      state.unreadCount = 0;
    },
  },
});

export const { addNotification, markAsRead, markAllAsRead } = notificationsSlice.actions;

export default notificationsSlice.reducer;