import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import Carrot from '../images/logo-small.png';

import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <header className="App-header">
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
                  { loop: true }
                }
              />
            </h3>
            <h1>
              Greg
            </h1>
            <span className="sub-heading"><h4>Full-Stack Developer</h4><Image src={Carrot} className="carrot" /></span>
            <p>Amazon Web Services (AWS) • Java • JavaScript • TypeScript • React • SQL • Node • Python • DevOps </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="scroll">
            <Row className="centered">
              <p>Scroll</p>
              <FontAwesomeIcon className="bounce" icon={faArrowDown} />
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Hero;
