import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ListaDocumentoCard from '../components/ListaDocumentoCard';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';
import StatoDocumento from '../enum/statoDocumento';

const HomePage = () => {

  return (
    <Container className="main-container pt-5 pb-5">

      <h3>Homepage</h3>

      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>
          <ListaDocumentoCard titolo={"Documenti da compilare"} stato={StatoDocumento.DA_COMPILARE} />
          <ListaDocumentoCard titolo={"Documenti da firmare"} stato={StatoDocumento.DA_FIRMARE} />
          <ListaDocumentoCard titolo={"Documenti in attesa"} stato={StatoDocumento.IN_ATTESA} />
          <ListaDocumentoCard titolo={"Documenti firmati"} stato={StatoDocumento.FIRMATO} />
          <ListaDocumentoCard titolo={"Documenti scaduti"} stato={StatoDocumento.SCADUTO} />
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
