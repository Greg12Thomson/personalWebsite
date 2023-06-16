import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

function Education() {
    return (
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
    );
}

export default Education;
