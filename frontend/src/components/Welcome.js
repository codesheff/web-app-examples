import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Welcome() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Welcome to Fruity Fruits</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            This is a simple application that allows you to selet some lovely
            fruit.
          </p>
        </Col>
      </Row>
      <Button variant="primary" href="https://unsplash.com/" target="_blank">
        Learn more
      </Button>
    </Container>
  );
}

export default Welcome;
