import React, { useEffect } from 'react';
import { Button, Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { FaChevronLeft, FaFileAlt, FaFileSignature } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDocuments } from '../actions/DocumentActions.js'; // Azione per caricare i documenti
import { addNotification } from '../actions/NotificationActions.js';
import { StatoDocumento } from '../enum/StatoDocumento';

import DatiTecniciDocumentoCard from '../components/DatiTecniciDocumentoCard.jsx';
import DettaglioDocumentoCard from '../components/DettaglioDocumentoCard.jsx';
import FirmaDocumentoCard from '../components/FirmaDocumentoCard.jsx';
import ScaricaDocumentoCard from '../components/ScaricaDocumentoCard.jsx';
import { handleCompileDocument, handleSignDocument } from '../utils/NavigationUtil.js';

const DettaglioDocumentoPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Recupera l'codiceDocumento dalla URL
  const { codiceDocumento } = useParams();

  // Otteniamo lo stato dal Redux store
  const { documents, loading, error } = useSelector((state) => state.documents);
  const documento = documents.find(doc => doc.codiceDocumento === codiceDocumento);

  // Effettua la chiamata per recuperare i documenti quando il componente è montato
  useEffect(() => {
    dispatch(fetchDocuments()); // Dispatciamo l'azione per ottenere i documenti
  }, [dispatch]);

  // Se i dati sono in caricamento, mostriamo lo spinner
  if (loading) {
    return (
      <Container className="main-container pt-5 pb-5">
        <h3>Dettaglio documento</h3>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }} >
          <div style={{ width: '80%', padding: '20px' }}>
            <ProgressBar animated now={60} label="Caricamento..." />
          </div>
        </div>
      </Container>
    );
  }

  // Se c'è un errore, mostriamo un messaggio
  if (error) {
    dispatch(addNotification("Si è verificato un errore: " + error, "error"));
  }

  return (
    <Container className="main-container pt-5 pb-5">
      <h3>Dettaglio documento</h3>
      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>
          <DettaglioDocumentoCard documento={documento} />

          {documento.stato == StatoDocumento.DA_FIRMARE && <FirmaDocumentoCard documento={documento} />}

          <DatiTecniciDocumentoCard documento={documento} />

          {(documento.stato == StatoDocumento.DA_COMPILARE || documento.stato == StatoDocumento.DA_FIRMARE) && (
            <Card className="mb-4 custom-card">

              <div className="card-body">

                {documento.stato == StatoDocumento.DA_COMPILARE &&
                  <Button onClick={() => handleCompileDocument(navigate, documento.codiceDocumento)} variant="primary" className="btn-firma">
                    Compila documento <FaFileAlt className="ml-2" />
                  </Button>}

                {documento.stato == StatoDocumento.DA_FIRMARE &&
                  <Button onClick={() => handleSignDocument(navigate, documento.codiceDocumento)} variant="primary" className="btn-firma">
                    Firma documento <FaFileSignature className="ml-2" />
                  </Button>}

              </div>

            </Card >)}



          <div className="text-end mt-3">
            <a onClick={() => navigate(-1)} rel="noopener noreferrer" style={{ cursor: "pointer", fontSize: "large" }} className="mt-3 text-primary">
              <FaChevronLeft /> Torna alla lista
            </a>
          </div>
        </Col>

        {/* Colonna laterale (opzionale, visibile su schermi più grandi) */}
        <Col xs={12} md={4}>
          <ScaricaDocumentoCard documento={documento} />
        </Col>
      </Row>
    </Container>
  );
};

export default DettaglioDocumentoPage;
