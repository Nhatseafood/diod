import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <div>
      <section>
        <Row>
          <Col>
            <h2>About</h2>
            <h3>The faces behind Diod.design</h3>
            <p>
              We’re engineers who appreciate the power of music and it’s role in
              our world. After building our earliest and most basic music
              reactive lighting, we saw a sense of wonder and joy in the people
              who saw it. Since then, our technology has evolved, as well as the
              emotions that we evoke by making music a multi-sensory experience.
              Our mission is to bring a new excitement to people’s favorite
              music.
            </p>
          </Col>
          <Col lg={4} className="founders"></Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col lg={4} className="dan"></Col>
          <Col>
            <h2>FOUNDER + CEO</h2>
            <h3>Dan Haber</h3>
            <p>
              Dan is the Founder and Creative Director of diod.design. During
              his studies as an Aerospace Engineer at the University of
              Maryland, he became obsessed with making LEDs react to music. This
              passion has evolved from a dorm room project to what is now
              Diod.design. Before starting this company, Dan worked as an
              aerospace engineer at NASA in satellite operations. His
              methodology combines his deep knowledge of hardware, systems
              controls, and digital audio technology.
            </p>
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col lg={4} className="grant"></Col>
          <Col>
            <h2>PRESIDENT</h2>
            <h3>Grant Barrett</h3>
            <p>
              Grant’s role within diod.design is somewhere at the crossroads
              between ‘Engineering’ and ‘Business.’ He received an Aerospace
              Engineering degree from the University of Maryland and currently
              works in mission operations at NASA. Music has always played a
              very important role in Grant’s life. Diod.design is where his
              passions for music and engineering harmoniously meet.
            </p>
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <Col lg={4} className="vic"></Col>
          <Col>
            <h2>BRAND DIRECTOR + DESIGNER</h2>
            <h3>Victoria Mitchell</h3>
            <p>
              Victoria is a Brand Director and Designer at Diod.design. Her
              interest in product design and psychology began during her studies
              as a Biomedical Engineer at Vanderbilt University, where she
              worked on alarm silencing technology to help improve patient
              outcomes in intensive care unit (ICU) settings. Before
              diod.design, Victoria worked as an engineer and product designer
              in healthcare, fintech, and digital media. As a dancer, bassist,
              and mediocre DJ, Victoria has always felt an intense connection to
              music.
            </p>
          </Col>
        </Row>
      </section>
    </div>
  );
};
export default AboutScreen;
