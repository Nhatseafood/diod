import React from "react";
import { Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-4 col-xs-12">
            <ul className="address">
              <div className="footer-logo"></div>
              <li>
                <p className="text-dark">Copyright &copy; 2021</p>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul className="contact">
              <span>GET IN TOUCH</span>

              <li>
                <a href="#">301-448-8946</a>
              </li>

              <li>
                <a href="mailto:info@diod.design">info@diod.design</a>
              </li>
              <li>
                <i className="px-2 fa-2x fab fa-instagram"></i>
                <i className="fab fa-2x fa-facebook"></i>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <Form className="text-center">
              <Form.Group controlId="formBasicEmail">
                <Form.Text>
                  Please subscribe to our newsletter. We'd love to keep you
                  updated!
                </Form.Text>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
