// src/pages/AboutPage.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="main-container pt-5 pb-5">
      <Row>
        {/* Colonna principale per il contenuto */}
        <Col xs={12} md={8}>
          <h3>Pagina testuale</h3>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat diam sed scelerisque tincidunt. Nunc cursus nisl a dui blandit sagittis sit amet in nisi. Etiam quis diam sit amet sapien fermentum euismod vitae ac dolor. Nunc eu eleifend mi. Sed auctor, felis sed rhoncus vulputate, risus leo fermentum mauris, vitae dignissim lectus magna ullamcorper nibh. Nunc quis lectus pulvinar, consequat ante a, convallis enim. Vestibulum blandit fermentum porttitor. Donec quis accumsan nibh, in tristique ante. Fusce auctor arcu in turpis pulvinar, non tempus justo malesuada. Pellentesque bibendum ante ac tempus eleifend. Proin vitae arcu id dui fringilla ornare. Donec non augue rhoncus, consectetur sapien nec, suscipit libero. Nullam ac enim quis ex elementum blandit. In a nunc convallis, auctor nunc et, volutpat diam. Pellentesque blandit pretium orci id dictum. Mauris placerat tempus placerat.</p>

          <p>Nulla aliquet eget arcu sed interdum. Suspendisse nisl arcu, tincidunt quis viverra a, laoreet faucibus turpis. Suspendisse ante ipsum, fringilla ac mollis sed, scelerisque in magna. In pellentesque auctor malesuada. Fusce orci odio, accumsan et elementum at, dapibus nec elit. Aliquam pharetra nulla et ex gravida, vel pulvinar ligula hendrerit. Nulla convallis ipsum nec leo aliquam molestie. Aenean nulla magna, semper ac faucibus quis, vulputate sit amet est. Nunc quis enim mauris. Pellentesque vel maximus lacus. Donec volutpat purus malesuada sem egestas euismod.</p>

          <p>Nunc quis efficitur erat. Vivamus ac est quam. Nam nec vehicula tortor. Sed hendrerit purus a dolor tristique convallis. Mauris ornare hendrerit sagittis. Etiam libero eros, vehicula ut molestie ullamcorper, cursus sed nisi. Nam aliquet sagittis massa, sed imperdiet erat mollis in. Sed rhoncus ornare tellus vitae bibendum. Nulla id pulvinar lacus. Donec vel velit nunc. Nam semper ipsum dolor, in condimentum ante tincidunt et. Cras pulvinar, quam quis faucibus pellentesque, justo elit laoreet quam, eget ultrices ipsum nibh sed ex.</p>

          <p>Nulla quis eros quam. Quisque ac ullamcorper ex. Praesent venenatis tempus risus, in tempor ipsum auctor sed. Nulla eleifend cursus rhoncus. Sed in magna felis. Sed eu tellus tempus, varius eros id, hendrerit lacus. Duis faucibus vestibulum consectetur. Aenean mattis blandit luctus. Mauris egestas enim eget odio posuere mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed gravida tempor varius.</p>

          <p>Etiam pulvinar luctus scelerisque. Integer tincidunt porttitor diam, sit amet ornare nibh fermentum eu. Proin tincidunt augue aliquam mauris consectetur, nec cursus lacus laoreet. Etiam vitae blandit est. Quisque pulvinar volutpat egestas. Donec posuere et ex eu finibus. Vivamus rutrum, neque sed accumsan dictum, purus massa consectetur tellus, et convallis sem sapien at est. Donec semper, felis ac sollicitudin commodo, tellus quam facilisis est, vel ultricies libero urna eu arcu. Nunc tristique lectus ac augue interdum, eu cursus augue convallis. </p>
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

export default AboutPage;
