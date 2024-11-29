// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './features/dataSlice';
import { FaCheckCircle } from 'react-icons/fa'; // Importa un'icona per il successo
import HomePage from './pages/HomePage';
import DocumentiDaFirmarePage from './pages/DocumentiDaFirmarePage';
import DocumentiDaCompilarePage from './pages/DocumentiDaCompilarePage';
import DocumentiInAttesaPage from './pages/DocumentiInAttesaPage';
import NotifichePage from './pages/NotifichePage';

import Header from './components/Header'; // Importa il componente Header
import Footer from './components/Footer';
import DocumentiFirmatiPage from './pages/DocumentiFirmatiPage';
import DocumentiScadutiPage from './pages/DocumentiScadutiPage';
import DocumentiAnnullatiPage from './pages/DocumentiAnnullatiPage';

const App = () => {

  const user = useSelector((state) => state);

  const handleLogin = () => {
    // Simula un login con nome e cognome
    dispatch(loginUser({ firstName: 'John', lastName: 'Doe' }));
  };
  
  const dispatch = useDispatch();

  const notifications = useSelector((state) => state.notifications.notifications); // Accedi alle notifiche dal Redux store
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

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router>
      <Header /> {/* Barra di navigazione visibile su tutte le pagine */}
      <div className="container-app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documenti-da-compilare" element={<DocumentiDaCompilarePage />} />
          <Route path="/documenti-da-firmare" element={<DocumentiDaFirmarePage />} />
          <Route path="/documenti-in-attesa" element={<DocumentiInAttesaPage />} />
          <Route path="/frima-massiva" element={<DocumentiDaFirmarePage />} />
          <Route path="/archivio-documenti/firmati" element={<DocumentiFirmatiPage />} />
          <Route path="/archivio-documenti/scaduti" element={<DocumentiScadutiPage />} />
          <Route path="/archivio-documenti/annullati" element={<DocumentiAnnullatiPage />} />
          <Route path="/notifiche" element={<NotifichePage />} />
        </Routes>
      </div>
      {/* ToastContainer per visualizzare le notifiche in basso a destra */}
      <ToastContainer position='bottom-end' >
        {visibleNotifications.map((notification) => (
          <Toast
            key={notification.id}
            show={notification.showToast} // Imposta visibilità in base allo stato
            delay={5000} // Tempo in cui il Toast si nasconde automaticamente
            autohide // Nasconde automaticamente dopo il tempo impostato
            animation={true}  // Attiva animazione di default
            style={{ backgroundColor: '#ffffff', color: '#333333', fontSize: 'medium', position: "fixed", bottom: "20px", right: "20px", WebkitTransform: 'translate3d(0, 0, var(--toastify-z-index))' }}
          >
            <Toast.Header style={{ backgroundColor: '#F0FFF0', color: '#333333', padding: '15px'}}>
              <strong className="me-auto"> <FaCheckCircle size={18} color='green' style={{verticalAlign: 'text-bottom'}}></FaCheckCircle> Successo</strong>
              <small>Appena ora</small>
            </Toast.Header>
            <Toast.Body style={{ padding: '15px'}}>
                {notification.message}
            </Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
      <Footer /> {/* Footer visibile su tutte le pagine */}


    </Router>
  );
};

export default App;
