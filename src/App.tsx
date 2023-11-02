import React from "react";
import { Container, Col, Row, Image } from 'react-bootstrap';

import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer';
import Hero from './components/Hero'
import HeadShot from './images/headshot.jpg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
      </header>
      
      <div className="section">
        <Container className="experience">
          <Row>
            <Col md={12}>
              <h1>About Me</h1>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col md={8} sm={12}>
              <p className="intro">
                Hello, I’m Greg from Perth, Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿 I’ve been programming for over a decade and have
                5+ years of experience as a software engineer. I started as a backend engineer doing
                everything AWS and Java but found myself loving project with real customer
                impact which led me to more full-stack work.<br/><br/>

                I have now worked on Prime Video’s livingroom app, implemented developer tools
                for Prime Video Builder Tool, launched features and maintained multiple AWS services,
                and lead projects for customer facing features which spanned across multiple AWS
                services. During that time I have worked across many tech stacks and environments
                and learned many programming languages on the way.<br/><br/>

                I have a real passion to learn new things and I’m not afraid to try new things. As
                a full-stack engineer I have experience working closely with senior product
                managers, senior UX designers, principal engineers and managers.<br/><br/>

                I am currently taking a break from work with my wife to travel around Europe
                in our van, Judi! 🚐<br/><br/>
              </p>
            </Col>
            <Col md={4} sm={12}>
              <Image src={HeadShot} fluid roundedCircle />
            </Col>
          </Row>
        </Container>
      </div>
      
      <Experience />

      <Education />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;
