// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-white">
      <p>
        <a href="http://www.leo.gov.it">Ministero dell'Istruzione</a>
        <span className="allright"> - </span>
        <span className="allright">Tutti i diritti riservati © 2024</span>
      </p>
    </footer>
    /* <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} MyApp. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer> */
  );
};

export default Footer;
