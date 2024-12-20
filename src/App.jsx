import React from 'react';
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer da React-Toastify
import NotificationListener from './listeners/NotificationListener';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Importa il componente Header
import Footer from './components/Footer';
import SidebarNavigation from './components/SidebarNavigation';

import HomePage from './pages/HomePage';
import DocumentiDaFirmarePage from './pages/DocumentiDaFirmarePage';
import DocumentiDaCompilarePage from './pages/DocumentiDaCompilarePage';
import DocumentiInAttesaPage from './pages/DocumentiInAttesaPage';
import DocumentiFirmatiPage from './pages/DocumentiFirmatiPage';
import DocumentiScadutiPage from './pages/DocumentiScadutiPage';
import DocumentiAnnullatiPage from './pages/DocumentiAnnullatiPage';
import NotifichePage from './pages/NotifichePage';
import DettaglioDocumentoPage from './pages/DettaglioDocumentoPage';
import DocumentListener from './listeners/DocumentListener';
import FirmaDocumentoPage from './pages/FirmaDocumentoPage';

const App = () => {

  const containerApp = () => {
    return <div className="container-app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/documenti-da-compilare" element={<DocumentiDaCompilarePage />} />
        <Route path="/documenti-da-firmare" element={<DocumentiDaFirmarePage />} />
        <Route path="/documenti-in-attesa" element={<DocumentiInAttesaPage />} />
        <Route path="/frima-massiva" element={<DocumentiDaFirmarePage />} />
        <Route path="/archivio-documenti/firmati" element={<DocumentiFirmatiPage />} />
        <Route path="/archivio-documenti/scaduti" element={<DocumentiScadutiPage />} />
        <Route path="/archivio-documenti/annullati" element={<DocumentiAnnullatiPage />} />

        {/* Dettaglio documento */}
        <Route path="/documenti-da-compilare/dettaglio-documento/:codiceDocumento" element={<DettaglioDocumentoPage />} />
        <Route path="/documenti-da-firmare/dettaglio-documento/:codiceDocumento" element={<DettaglioDocumentoPage />} />
        <Route path="/documenti-in-attesa/dettaglio-documento/:codiceDocumento" element={<DettaglioDocumentoPage />} />
        <Route path="/archivio-documenti/firmati/dettaglio-documento/:codiceDocumento" element={<DettaglioDocumentoPage />} />
        <Route path="/archivio-documenti/scaduti/dettaglio-documento/:codiceDocumento" element={<DettaglioDocumentoPage />} />
        <Route path="/archivio-documenti/annullati/dettaglio-documento/:codiceDocumento" element={<DettaglioDocumentoPage />} />

        {/* Firma documento */}
        <Route path="/documenti-da-firmare/firma-documento/:codiceDocumento" element={<FirmaDocumentoPage />} />

        <Route path="/notifiche" element={<NotifichePage />} />
      </Routes>

    </div>
  }

  return (
    <Router>
      {/* Barra di navigazione visibile su tutte le pagine */}
      <Header />

      {/* Menu di navigazione laterale: rimuovere se attivo il componente HorizontalbarNavigation */}
      <SidebarNavigation>
        {containerApp()}
      </SidebarNavigation>

      {/* Menu di navigazione orizzontale */}
      {/* {containerApp()} */}

      {/* Contenitore per i toast */}
      <ToastContainer />

      {/* Aggiungi il componente NotificationListener per gestire la visualizzazione delle notifiche */}
      <NotificationListener />

      {/* Aggiungi il componente DocumentListener per gestire le notifiche per l'aggiornamento dei documenti' */}
      <DocumentListener />

      {/* Footer visibile su tutte le pagine */}
      < Footer />

    </Router >
  );
};

export default App;
