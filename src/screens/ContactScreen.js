import React from "react";
import { Jumbotron, Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactScreen = () => {
  return (
    <div>
      <section>
        <Row>
          <Col>
            <h2>Drop us a line.</h2>
            <h3>We know you want to.</h3>
            <p>
              Whether you want to work with us or are interested in learning
              more about what we do, we would love to hear from you.
              info@diod.design
            </p>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="Message" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default ContactScreen;
