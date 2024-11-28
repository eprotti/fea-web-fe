// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';
import { addNotification } from './redux/notificationsSlice';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotificationsPage from './pages/NotificationsPage';

import Header from './components/Header'; // Importa il componente Header
import Footer from './components/Footer';

const App = () => {

/*   const dispatch = useDispatch();
 */  const notifications = useSelector((state) => state.notifications.notifications); // Accedi alle notifiche dal Redux store
/*   const [showToast, setShowToast] = useState(false);
 */
  // Stato locale per tenere traccia delle notifiche visibili
  const [visibleNotifications, setVisibleNotifications] = useState([]);

  useEffect(() => {
    // Aggiungi una nuova notifica alla lista delle notifiche visibili
    if (notifications.length > 0) {
      notifications.forEach((notification) => {
        // Evita di aggiungere notifiche già presenti
        if (!visibleNotifications.some((n) => n.id === notification.id)) {
          setVisibleNotifications((prevNotifications) => [
            ...prevNotifications,
            { ...notification, showToast: true }, // Aggiungi `showToast` per tenere traccia della visibilità
          ]);
        }
      });
    }
  }, [notifications, visibleNotifications]); // Monitora notifiche e visibili

  useEffect(() => {
    // Rimuove automaticamente ogni notifica dopo 5 secondi
    const timer = setTimeout(() => {
      setVisibleNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.showToast
            ? { ...notification, showToast: false } // Nascondi la notifica dopo 5 secondi
            : notification
        )
      );
    }, 5000); // Impostiamo il delay di 5 secondi

    return () => clearTimeout(timer); // Pulisce il timer quando il componente si smonta
  }, [visibleNotifications]); // Rimuovi il toast per ogni aggiornamento delle notifiche visibili

  return (
    <Router>
      <Header /> {/* Barra di navigazione visibile su tutte le pagine */}
      <div className="container-app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documenti-da-compilare" element={<AboutPage />} />
          <Route path="/documenti-da-firmare" element={<AboutPage />} />
          <Route path="/documenti-in-attesa" element={<AboutPage />} />
          <Route path="/frima-massiva" element={<AboutPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </div>
      {/* ToastContainer per visualizzare le notifiche in basso a destra */}
      <ToastContainer position="bottom-end" className="p-3">
        {visibleNotifications.map((notification) => (
          <Toast
            key={notification.id}
            show={notification.showToast} // Imposta visibilità basata su stato
            delay={5000} // Tempo in cui il Toast si nasconde automaticamente
            autohide // Attiva l'autospegnimento
          >
            <Toast.Body>{notification.message}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
      <Footer /> {/* Footer visibile su tutte le pagine */}


    </Router>
  );
};

export default App;
