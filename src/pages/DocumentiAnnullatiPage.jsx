import React, { useEffect } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDocuments } from '../actions/documentActions.js'; 
import { addNotification } from '../actions/notificationActions';
import StatoDocumento from '../enum/statoDocumento.js';

import DocumentoCard from '../components/DocumentoCard';

const DocumentiAnnullatiPage = () => {
  const dispatch = useDispatch();

  const { documents, loading, error } = useSelector((state) => state.documents);
  const statusesToFilter = [StatoDocumento.ANNULLATO];
  const filteredDocuments = documents.filter(doc => statusesToFilter.includes(doc.stato));

  // Effettua la chiamata per recuperare i documenti quando il componente è montato
  useEffect(() => {
    dispatch(fetchDocuments()); // Dispatciamo l'azione per ottenere i documenti
  }, [dispatch]);

  // Se i dati sono in caricamento, mostriamo lo spinner
  if (loading) {
    return (
      <Container className="main-container pt-5 pb-5">
        <h3>Documenti annullati</h3>
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
      <h3>Documenti annullati</h3>
      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>

          {Array.isArray(filteredDocuments) && filteredDocuments.length > 0 ? (
            <>
              {filteredDocuments?.map((document) => (
                <DocumentoCard
                  key={document.codiceDocumento}
                  codiceDocumento={document.codiceDocumento}
                  titolo={document.titolo}
                  descrizione={document.descrizione}
                  dataInserimento={document.dataInserimento}
                  dataScadenza={document.dataScadenza}
                  stato={StatoDocumento.ANNULLATO}
                />
              ))}
            </>
          ) : (
            <Card className="mb-4 custom-card py-4">
              <Card.Body>
                <h5 className='text-center'>Nessun documento trovato</h5>
              </Card.Body>
            </Card>
          )}
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

export default DocumentiAnnullatiPage;
