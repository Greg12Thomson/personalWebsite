import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import Typewriter from "typewriter-effect";

function Hero() {
    return (
        <Container>
          <Row className="hero">
            <Col md={8}>
              <h3>
                <Typewriter
                  onInit={(typewriter) => {
                      typewriter
                          .typeString("Hello There ")
                          .pasteString("👋", null)
                          .pauseFor(700)
                          .typeString(", I'm")
                          .pauseFor(2000)
                          .deleteAll()
                          .start();
                  }}
                  options={
                    {loop:true}
                  }
                />
              </h3>
              <h1>
                Greg  
              </h1>
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
