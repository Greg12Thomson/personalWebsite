import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
      </header>
      <Experience />

      <Education />

      <div className="section">
          <Container className="contact">
            <Row>
              <Col md={12}>
                <h1>Contact</h1>
              </Col>
            </Row>
            <hr/>
          </Container>
      </div>

      <div className="footer">
        <p>© 2022 Greg Thomson</p>
      </div>
    </div>
  );
}

export default App;
