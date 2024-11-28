// src/pages/AboutPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="main-container pt-5 pb-5">
      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>
          <h1>Welcome to My App</h1>
          <p>This is the homepage of my app. It is responsive and adjusts to screen size.</p>
        </Col>

        {/* Colonna laterale (opzionale, visibile su schermi più grandi) */}
        <Col xs={12} md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Side Content</Card.Title>
              <Card.Text>
                This side content is visible on larger screens, but it collapses on small devices.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
