import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

function Contact() {
    return (
      <div className="section">
        <Container className="contact">
          <Row>
            <Col md={12}>
              <h1>Contact</h1>
            </Col>
          </Row>
          <hr/>
          <p>
            Just saying hello, ask for my CV or see if we can build something amazing that makes
            a differnce? I'd love to hear from you. <br/><br/>

            Fill in your info in the form below:
          </p>
        </Container>
      </div>
    );
}

export default Contact;
