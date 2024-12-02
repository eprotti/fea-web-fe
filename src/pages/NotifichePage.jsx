import React from 'react';
import { useDispatch } from 'react-redux';
import { addNotification } from '../actions/notificationActions';
import Notifications from '../components/Notifications';
import { Container, Row, Col, Card } from 'react-bootstrap';

const App = () => {
  const dispatch = useDispatch();

  const addNotificationHandler = (message, type = 'info') => {
    dispatch(addNotification(message, type));  // Aggiungi la notifica allo stato Redux
  };

  return (
    <Container className="main-container pt-5 pb-5">
      <h3>Notifiche</h3>
      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>
          <Notifications /> {/* Mostra le notifiche */}
        </Col>

        {/* Colonna laterale (opzionale, visibile su schermi più grandi) */}
        <Col xs={12} md={4}>
          <Card>
            <Card.Title className='px-5 pt-1'>Aggiungi notifica</Card.Title>
            <Card.Body className='px-5 pt-1'>
              <button className='pt-2 btn btn-primary' onClick={() => addNotificationHandler('Notifica di esempio (successo)', 'success')}>
                Aggiungi notifica success
              </button>
              <button className='pt-2 btn btn-secondary error' onClick={() => addNotificationHandler('Notifica di esempio (errore)', 'error')}>
                Aggiungi notifica errore
              </button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container >
  );
};

export default App;
