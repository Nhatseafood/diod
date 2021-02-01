import React from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

const HomeScreen = () => {
  return (
    <div>
      <Jumbotron className="main-jumbo" fluid>
        <Container>
          <h1>
            We build LED music-visualizers because music deserves to be seen.
          </h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <section>
        <Row>
          <Col>
            <Image src="qube.jpg" thumbnail />
          </Col>
          <Col>
            <h2>Qube</h2>
            <p>
              Qube is a large LED installation that brings people together
              around a shared love for music. It’s a 3-dimensional canvas that
              continuously paints a song’s picture and helps convey the artist’s
              emotions embedded in the music. Qube is built with steel piping,
              measures roughly 9’x9’x9′, and has 512 LEDs hanging from the
              ceiling. Our custom-built hardware and software analyzes music and
              creates dazzling animations The first place qube will be on
              display is at The Shops at Tanforan in San Bruno, CA from
              12/1/2020 to 12/31/2021. While there, it will have a storefront to
              itself, providing a more intimate experience for guests to
              experience music in a completely new way. Do you want qube to
              grace your space? Please feel free to reach out to ask about
              renting it.
            </p>
          </Col>
        </Row>
      </section>
      <h1>Home</h1>
    </div>
  );
};

export default HomeScreen;
