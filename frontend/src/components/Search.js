import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';


//"mt-4 gives a margin at the top"
function Search({handleSubmit}) {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Col xs={9}>
                <Form.Control placeholder="Search for new image..." />
              </Col>
              <Col>
                  <Button variant="primary" type="submit">Search</Button>{' '}
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
