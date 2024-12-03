import React, { useEffect } from 'react';
import { Button, Card, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import { FaChevronLeft, FaDownload } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchDocuments } from '../actions/documentActions.js'; // Azione per caricare i documenti
import { addNotification } from '../actions/notificationActions.js';

import DettaglioDocumentoCard from '../components/DettaglioDocumentoCard.jsx';
import StatoDocumento from '../enum/statoDocumento.js';

const DettaglioDocumentoPage = () => {
  const dispatch = useDispatch();

  // Recupera l'codiceDocumento dalla URL
  const { codiceDocumento } = useParams();

  // Otteniamo lo stato dal Redux store
  const { documents, loading, error } = useSelector((state) => state.documents);

  // Usa find per ottenere il documento con codiceDocumento uguale a documentIdToFind
  const documento = documents.find(doc => doc.codiceDocumento === parseInt(codiceDocumento));

  // Usa useNavigate per navigare
  const navigate = useNavigate();

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

          <div className="text-end mt-3">
            <a onClick={() => navigate(-1)} rel="noopener noreferrer" style={{ cursor: "pointer" }} className="mt-3 d-block text-primary">
              <FaChevronLeft /> Torna alla lista
            </a>
          </div>
        </Col>

        {/* Colonna laterale (opzionale, visibile su schermi più grandi) */}
        <Col xs={12} md={4}>

          <Card className="mb-4 custom-card">

            <div className="card-body px-4 py-4">

              <Card.Subtitle className="mb-2 text-muted py-1">
                <h5 className="m-a-0 text-uppercase light mt-0 mb-0">consulta il documento</h5>
              </Card.Subtitle>


              <a href="#" className="external" title="il documento verrà aperto in una nuova finestra">
                <img src="/img/document-icon-11.svg" className="my-1 mb-4" alt="consulta il documento" />

                <Button variant="primary" className="btn-secondary">
                  Scarica <FaDownload className="ml-2" />
                </Button>
              </a>
            </div>


          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DettaglioDocumentoPage;
