import React, { useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';  // Importa il contenitore per le notifiche
import 'react-toastify/dist/ReactToastify.css';  // Importa il file CSS per le notifiche
import { fetchDocuments } from '../actions/documentActions.js'; // Azione per caricare i documenti

import DocumentoCard from '../components/DocumentoCard';

const DocumentiScadutiPage = () => {
  const dispatch = useDispatch();

  // Otteniamo lo stato dal Redux store
  const { documents, loading, error } = useSelector((state) => state.documents);

  // Effettua la chiamata per recuperare i documenti quando il componente è montato
  useEffect(() => {
    dispatch(fetchDocuments()); // Dispatciamo l'azione per ottenere i documenti
  }, [dispatch]);

  // Se i dati sono in caricamento, mostriamo lo spinner
  if (loading) {
    return (
      <Container className="main-container pt-5 pb-5">
        <h3>Documenti scaduti</h3>
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
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <Container className="main-container pt-5 pb-5">
      <h3>Documenti scaduti</h3>
      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>

          {documents?.map((document) => (
            <DocumentoCard
              key={document.id}
              titolo={document.title}
              descrizione={document.title}
              dataInserimento={document.dataInserimento}
              dataScadenza={document.dataScadenza}
              tipo={"SCADUTI"}
            />
          ))}

          {/* Aggiungi il container per le notifiche */}
          <ToastContainer />
        </Col>

        {/* Colonna laterale (opzionale, visibile su schermi più grandi) */}
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat diam sed scelerisque tincidunt. Nunc cursus nisl a dui blandit sagittis sit amet in nisi. Etiam quis diam sit amet sapien fermentum euismod vitae ac dolor. Nunc eu eleifend mi. Sed auctor, felis sed rhoncus vulputate, risus leo fermentum mauris, vitae dignissim lectus magna ullamcorper nibh. Nunc quis lectus pulvinar, consequat ante a, convallis enim. Vestibulum blandit fermentum porttitor. Donec quis accumsan nibh, in tristique ante. Fusce auctor arcu in turpis pulvinar, non tempus justo malesuada. Pellentesque bibendum ante ac tempus eleifend. Proin vitae arcu id dui fringilla ornare. Donec non augue rhoncus, consectetur sapien nec, suscipit libero. Nullam ac enim quis ex elementum blandit. In a nunc convallis, auctor nunc et, volutpat diam. Pellentesque blandit pretium orci id dictum. Mauris placerat tempus placerat.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DocumentiScadutiPage;
