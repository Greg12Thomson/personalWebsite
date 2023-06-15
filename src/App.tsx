import React from "react";
import { Container, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'


import './App.css';
import { DEFAULT_MAX_VERSION } from "tls";

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
          <Row>
            <Col md={12} className="scroll">
              <Row className="centered">
                <p>Scroll</p>
                <FontAwesomeIcon icon={faArrowDown} />
              </Row>                
            </Col>
          </Row>
        </Container>
      </header>
      <div className="section">
          <Container className="experience">
            <Row>
              <Col md={12}>
                <h1>Past experience</h1>
              </Col>
            </Row>
            <hr/>


            {/* AWS */}
            <Row className="experience-card">
              <Col md={2}>
                Oct 2020 - Dec 2022
              </Col>
              <Col md={10}>
                <h3>Software Engineer II <span className="purple">•</span> AWS</h3>
                <h5 className="subheading">DevOps Guru & CodeGuru Profiler - London, UK</h5>
                <p>
                  Working on both Amazon DevOps Guru and Amazon CodeGuru Profiler. <br/>
                  <a href="https://aws.amazon.com/devops-guru/">https://aws.amazon.com/devops-guru/</a><br/>
                  <a href="https://aws.amazon.com/codeguru/">https://aws.amazon.com/codeguru/</a>
                </p>
                <ul className="skills">
                  <li>Java</li>
                  <li>Typescript</li>
                  <li>CDK</li>
                  <li>JavaScript</li>
                  <li>AWS</li>
                  <li>React</li>
                </ul>
              </Col>
            </Row>

            {/* Amazon SDE 2*/}
            <Row className="experience-card">
              <Col md={2}>
                Sep 2019 - Oct 2020
              </Col>
              <Col md={10}>
                <h3>Software Engineer II • Amazon</h3>
                <h5 className="subheading">Prime Video - London, UK</h5>
                <p>
                  Worked in the Prime Video's Builder Tools org. <br/>
                </p>
              </Col>
            </Row>

            {/* Amazon SDE 1*/}
            <Row className="experience-card">
              <Col md={2}>
                Jun 2017 - Sep 2019
              </Col>
              <Col md={10}>
                <h3>Software Engineer I • Amazon</h3>
                <h5 className="subheading">Prime Video - London, UK</h5>
                <p>TODO</p>
              </Col>
            </Row>

            <Row className="experience-card">
              <Col md={2}>
                Sep 2016 - Apr 2017
              </Col>
              <Col md={10}>
                <h3>Lab Demonstrator • University of Glasgow</h3>
                <h5 className="subheading">Glasgow, Scotland</h5>
                <p>Teaching Java and object-oriented software engineering to second-year students at the University of Glasgow.</p>
              </Col>
            </Row>

            <Row className="experience-card">
              <Col md={2}>
                Jun 2016 - Aug 2016
              </Col>
              <Col md={10}>
                <h3>Software Engineer Intern • Amazon</h3>
                <h5 className="subheading">People Tech - Edinburgh, Scotland</h5>
                <p>TODO</p>
              </Col>
            </Row>
          </Container>
      </div>

      <div className="section">
          <Container className="education">
            <Row>
              <Col md={12}>
                <h1>Education</h1>
              </Col>
            </Row>
            <hr/>

            <Row className="experience-card">
              <Col md={2}>
                2012 - 2017
              </Col>
              <Col md={10}>
                <h3>University of Glasgow</h3>
                <h5 className="subheading">Bachelor’s Degree, Computer Software Engineering</h5>
                <p>Grade: First Class</p>
              </Col>
            </Row>
          </Container>
      </div>

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
