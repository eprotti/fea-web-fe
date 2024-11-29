import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Notifications from '../components/Notifications';
import { addNotification } from '../redux/notificationsSlice';

const NotifichePage = () => {

  const dispatch = useDispatch();

  // Stato per il form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  // Stato per i messaggi di errore
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  // Funzione di gestione del cambiamento dei campi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Funzione per la validazione del form
  const validateForm = () => {
    let valid = true;
    let errors = {};

    // Validazione del nome
    if (!formData.name) {
      errors.name = 'Il nome è obbligatorio';
      valid = false;
    }

    // Validazione dell'email
    if (!formData.email) {
      errors.email = 'L\'email è obbligatoria';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'L\'email non è valida';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  // Funzione per inviare il form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Se il form è valido, procediamo
    if (validateForm()) {
      // Aggiungi notifica
      const notification = {
        id: new Date().getTime(),
        message: `Form inviato con successo! Nome: ${formData.name}, Email: ${formData.email}`,
      };
      dispatch(addNotification(notification));

      // Resetta il form dopo l'invio
      setFormData({
        name: '',
        email: '',
      });
      setErrors({});
    }
  };

  return (
    <Container className="main-container pt-5 pb-5">
      <Notifications />

      <hr className='mb-5'/>
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            isInvalid={!!errors.name} // Aggiungi la classe di errore se c'è un messaggio di errore
            isValid={!errors.name && formData.name} // Aggiungi la classe di validità se il campo è valido
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Inserisci la tua email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email} // Aggiungi la classe di errore se c'è un messaggio di errore
            isValid={!errors.email && formData.email} // Aggiungi la classe di validità se il campo è valido
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </Container>
  );
};

export default NotifichePage;