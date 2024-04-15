import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <Container className="footer">
      <Row className="socials">
        <Col md={12}>
          <a className='link' href='https://www.linkedin.com/in/greg-thomson-3a2227129/'><FontAwesomeIcon className='grow' icon={faLinkedinIn} size='2x' /></a>
          <a className='link' href='https://github.com/Greg12Thomson'><FontAwesomeIcon className='grow' icon={faGithub} size='2x' /></a>
        </Col>
      </Row>
      <Row className="footnote">
        <Col md={12}>
          <p>
            © Greg Thomson 2024
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
