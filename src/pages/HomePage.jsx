// src/pages/HomePage.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ListaDocumentoCard from '../components/ListaDocumentoCard';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

const HomePage = () => {

  return (
    <Container className="main-container pt-5 pb-5">
      <h3>Homepage</h3>
      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>
          <ListaDocumentoCard titolo={"Documenti da compilare"} tipo={"DA_COMPILARE"} />
          <ListaDocumentoCard titolo={"Documenti da firmare"} tipo={"DA_FIRMARE"} />
          <ListaDocumentoCard titolo={"Documenti in attesa"} tipo={"IN_ATTESA"} />
          <ListaDocumentoCard titolo={"Documenti firmati"} tipo={"FIRMATO"} />
          <ListaDocumentoCard titolo={"Documenti scaduti"} tipo={"SCADUTO"} />
        </Col>

        {/* Colonna laterale (opzionale, visibile su schermi più grandi) */}
        <Col xs={12} md={4}>
          <PieChart></PieChart>
          
          <BarChart />
        </Col>
      </Row>

    </Container>
  );
};

export default HomePage;
