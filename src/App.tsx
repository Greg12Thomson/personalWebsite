import React from "react";
import { Container, Col, Row } from 'react-bootstrap';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        </Container>
      </header>
      <div className="experience">
          <Container>
            <Row>
              <Col md={12}>
                <h1>Past experience</h1>
              </Col>
            </Row>
            <hr/>
          </Container>
        </div>
    </div>
  );
}

export default App;
