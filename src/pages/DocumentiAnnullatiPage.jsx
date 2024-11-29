import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, handleLoading, handleError } from '../features/dataSlice';  // Azioni Redux
import { ToastContainer } from 'react-toastify';  // Importa il contenitore per le notifiche
import 'react-toastify/dist/ReactToastify.css';  // Importa il file CSS per le notifiche

import DocumentoCard from '../components/DocumentoCard';

const DocumentiAnnullatiPage = () => {

  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(handleLoading());  // Imposta loading a true
    dispatch(fetchData())
      .catch((err) => dispatch(handleError(err.message || 'Errore nella chiamata API')));  // Gestisci errore
  }, [dispatch]);


  return (
    <Container className="main-container pt-5 pb-5">
      <h3>Documenti annullati</h3>
      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>

          <DocumentoCard
            titolo={"titolo"}
            descrizione={"descrizione"}
            dataInserimento={"2024-11-29"}
            dataScadenza={"2024-11-30"}
            tipo={"ANNULLATI"}
          />

          <DocumentoCard
            titolo={"titolo"}
            descrizione={"descrizione"}
            dataInserimento={"2024-11-29"}
            dataScadenza={"2024-12-30"}
            tipo={"ANNULLATI"}
          />

          {loading && <p>Caricamento...</p>}

          {error && <p style={{ color: 'red' }}>Errore: {error}</p>}  {/* Mostra errore, se presente */}

          <ul>
            {data?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>

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

export default DocumentiAnnullatiPage;
