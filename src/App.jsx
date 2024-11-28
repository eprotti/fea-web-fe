// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { addNotification } from './redux/notificationsSlice';
import { useDispatch } from 'react-redux';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotificationsPage from './pages/NotificationsPage';

import Header from './components/Header'; // Importa il componente Header
import Footer from './components/Footer'; 

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    // Simula l'aggiunta di notifiche
    dispatch(addNotification({ id: 1, message: 'New user registered', read: false }));
    dispatch(addNotification({ id: 2, message: 'New message received', read: false }));
  }, [dispatch]);

  return (
    <Router>
      <Header /> {/* Barra di navigazione visibile su tutte le pagine */}
      <div className="container-app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </div>
      <Footer /> {/* Footer visibile su tutte le pagine */}
    </Router>
  );
};

export default App;
