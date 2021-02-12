import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import InstagramEmbed from "react-instagram-embed";
import Feed from "react-instagram-authless-feed";

const HomeScreen = () => {
  return (
    <div>
      <Jumbotron className="main-jumbo" fluid>
        <Container className="container-padding">
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
        <Container>
          <Row>
            <Col lg={4} className="image-bg"></Col>
            <Col className="qube-section">
              <h2>Qube</h2>
              <p>
                Qube is a large LED installation that brings people together
                around a shared love for music. It’s a 3-dimensional canvas that
                continuously paints a song’s picture and helps convey the
                artist’s emotions embedded in the music. Qube is built with
                steel piping, measures roughly 9’x9’x9′, and has 512 LEDs
                hanging from the ceiling. Our custom-built hardware and software
                analyzes music and creates dazzling animations The first place
                qube will be on display is at The Shops at Tanforan in San
                Bruno, CA from 12/1/2020 to 12/31/2021. While there, it will
                have a storefront to itself, providing a more intimate
                experience for guests to experience music in a completely new
                way. Do you want qube to grace your space? Please feel free to
                reach out to ask about renting it.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
        <Row>
          <Col>
            <section className="youtube-player">
              <h2>
                Enjoy a video from our fully immersive installation Beatbox.
              </h2>
              <div className="video-wrapper">
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="100%"
                  url="https://www.youtube.com/watch?v=ExXDOH1UpR8&feature=emb_title"
                />
              </div>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            <section className="business-indiv">
              <h2>For businesses and individuals</h2>

              <p>
                Our technology will transform your space into a synesthetic
                experience. If you’re interested in buying or renting a
                music-visualizer product or installation, we would love to hear
                from you! Check out our Instagram @diod.design to see what we’ve
                built before, and please feel free to start the conversation by
                sending us a message on IG, emailing info@diod.design, or
                filling out our contact us form.
              </p>
            </section>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* <div id="instafeed"></div> */}
            <section className="instagram">
              <h2>Our latest Instagram posts</h2>
              <InstagramEmbed
                url="https://www.instagram.com/p/8577059057"
                clientAccessToken="439133290624753|9c19b97a489a333df934c2eea117b6c9"
                maxWidth={320}
                hideCaption={false}
                containerTagName="div"
                protocol=""
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}
              />
            </section>

            <section className="our-tech">
              <h2>
                Our technology is available to those who want to build their own
                music-visualizer!
              </h2>
              <p>
                To better serve our mission of spreading music-visualizer
                technology, we sell our custom hardware and have open-sourced
                our software. To buy our hardware, visit our product page on
                Tindie and to learn our C/C++ software, see our Github page.
                Also, if you’re interested in learning the software and need any
                help, or if you’d like consulting services on your lighting
                project, Dan Haber is happy to offer Zoom calls for $50/hr. Just
                email info@diod.design to get started.
              </p>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
