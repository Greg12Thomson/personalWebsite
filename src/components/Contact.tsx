import React from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap';

export const Contact = () => {
    const email = "Greg12Thomson@Gmail.com"

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
            a differnce? I'd love to hear from you. <br/>
          </p>
          <Button className="contact-me" href={`mailto:${email}`}>Contact Me 🤘</Button>
        </Container>
      </div>
    );
}

export default Contact;
