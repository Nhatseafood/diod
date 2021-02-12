import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import Feed from "react-instagram-authless-feed";

const ProjectsScreen = () => {
  return (
    <>
      <Container className="flex-images">
        <Row>
          <Col lg={4} className="wunder"></Col>
          <Col>
            <h2>Wunder Garten DC</h2>
            <p>
              The Polar Tunnel 8 pillars of light and a microphone turn this
              temporary winter tunnel into an immersive and multi-sensory
              installation.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2>New Office Grand Opening Party</h2>
            <p>
              A new office space on a busy corner, huge windows, and a party
              open to the public are a recipe for lighting that both creates a
              party atmosphere inside and shows it off to people outside.
            </p>
          </Col>
          <Col lg={4} className="office-gif"></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg={4} className="beatbox"></Col>
          <Col>
            <h2>BeatBox</h2>
            <p>
              Completely unassuming on the outside, but an infinitely expanding
              mirror room on the inside. Beatbox gives the patrons of Wunder
              Garten a chance to discover a hidden gem.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h2>Stone Fort Infinity Mirror</h2>
            <p>
              Bring the magic of a concert’s light show inside your home with
              this powerful consumer product.
            </p>
          </Col>
          <Col lg={4} className="infinity"></Col>
        </Row>

        <Row>
          <Col className="text-center">
            <h2>A couple people we’ve boogied with.</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <img
              className="img-fluid logo-image mx-auto"
              src="https://i.imgur.com/vpc6U8u.png"
              title="source: imgur.com"
            />
          </Col>
          <Col className="text-center">
            <img
              className="img-fluid logo-image"
              src="https://i.imgur.com/u86dtl1.png"
              title="source: imgur.com"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectsScreen;
