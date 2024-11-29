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

  const showSuccessToast = (message) => {
    toast.success(
      <div>
        <FaCheckCircle style={{ color: 'green', fontSize: '24px', marginRight: '10px' }} />
        <strong>Operazione completata con successo!</strong>
        <Toast.Body>
          {message}
        </Toast.Body>
      </div>,
      {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 5000,  // La notifica si chiude automaticamente dopo 5 secondi
      }
    );
  };

  return (
    <div>
      <h3>Notifiche</h3>

      <div className="d-flex justify-content-between align-items-center">

        <h5 className="mt-3">Notifiche non lette: {unreadCount}</h5>
        <Button variant="secondary" onClick={handleMarkAllAsRead}>
          Segna tutte come già lette
        </Button>
      </div>

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