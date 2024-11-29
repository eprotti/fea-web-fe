// src/pages/HomePage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ListaDocumentoCard from '../components/ListaDocumentoCard';

const HomePage = () => {

  const documents = [
    { id: 1, title: "Documento 1", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
    { id: 2, title: "Documento 2", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
    { id: 3, title: "Documento 3", dataInserimento: "2024-11-11", dataScadenza: "2024-12-11" },
  ];

  return (
    <Container className="main-container pt-5 pb-5">
      <h3>Homepage</h3>
      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>
          <ListaDocumentoCard documents={documents} titolo={"Documenti da compilare"} tipo={"DA_COMPILARE"} />
          <ListaDocumentoCard documents={documents} titolo={"Documenti da firmare"} tipo={"DA_FIRMARE"} />
          <ListaDocumentoCard documents={documents} titolo={"Documenti in attesa"} tipo={"IN_ATTESA"} />
          <ListaDocumentoCard documents={documents} titolo={"Documenti firmati"} tipo={"FIRMATI"} />
          <ListaDocumentoCard documents={documents} titolo={"Documenti scaduti"} tipo={"SCADUTI"} />
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

export default HomePage;
