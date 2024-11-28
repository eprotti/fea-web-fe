import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markAsRead, markAllAsRead } from '../redux/notificationsSlice';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.notifications);
  const unreadCount = useSelector((state) => state.notifications.unreadCount);

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  const handleMarkAllAsRead = () => {
    dispatch(markAllAsRead());
  };

  return (
    <div>
      <h3>Notifications</h3>
      <Button variant="secondary" onClick={handleMarkAllAsRead}>
        Mark all as read
      </Button>
      <h5 className="mt-3">Unread Notifications: {unreadCount}</h5>
      <ListGroup>
        {notifications.map((notification) => (
          <ListGroupItem
            key={notification.id}
            variant={notification.read ? 'light' : 'warning'}
            style={{ cursor: 'pointer' }}
            onClick={() => handleMarkAsRead(notification.id)}
          >
            {notification.message}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Notifications;