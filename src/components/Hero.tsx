import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Hero() {
    return (
        <Container>
          <Row className="hero">
            <Col md={8}>
              <h3>Hello There 👋, I'm</h3>
              {/* <h2>Hello, my name is <strong>Greg</strong></h2> */}
              <h1>
                Greg  
              </h1>
              {/* <h4>I'm a <strong>Full-Stack Developer</strong> from Edinburgh, Scotland.</h4> */}
              <h4>Full-Stack Developer</h4>
              <p>Amazon Web Services (AWS) • Java • JavaScript • TypeScript • CDK • SQL • Node • Python • Linux • Cordova</p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="scroll">
              <Row className="centered">
                <p>Scroll</p>
                <FontAwesomeIcon icon={faArrowDown} />
              </Row>                
            </Col>
          </Row>
        </Container>
    );
}

export default Hero;
