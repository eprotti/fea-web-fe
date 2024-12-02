import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markAsRead, removeNotification } from '../actions/notificationActions';

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications);  // Ottieni lo stato delle notifiche

  const handleRemove = (id) => {
    dispatch(removeNotification(id));  // Rimuovi la notifica dallo storico
  };

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));  // Segna la notifica come letta
  };

  return (
    <div>
      <ul>
        {notifications.map(notification => (
          <li
            key={notification.id}
            style={{
              backgroundColor: notification.isRead ? '#efefef' : '#ddeeff',  // Colore diverso per le notifiche lette e non lette
              padding: '10px',
              margin: '5px 0',
              borderRadius: '5px',
            }}
          >
            <div>
              <strong>{notification.isRead ? 'Letta' : 'Non letta'}</strong>: {notification.message}
            </div>
            <small>{new Date(notification.timestamp).toLocaleString()}</small>
            <div>
              <button onClick={() => handleMarkAsRead(notification.id)}>
                Segna come letta
              </button>
              <button onClick={() => handleRemove(notification.id)}>
                Rimuovi
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
