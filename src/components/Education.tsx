import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

const Education = () => {
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
                <p>
                  Honours Project: "Representing Jobs Using Auto-Generated Skill Tags" - using
                  information retrieval and machine learning to auto-generate skill tags to
                  improve job recommendations in collaboration with Amazon Development Center 
                  Scotland
                </p>
              </Col>
            </Row>
          </Container>
      </div>
    );
}

export default Education;
