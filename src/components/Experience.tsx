import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';

function Experience() {
    return (
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
                        <p>Oct 2020 - Dec 2022</p>
                    </Col>
                    <Col md={10}>
                    <h3>Software Engineer II <span className="purple">•</span> AWS</h3>
                    <h5 className="subheading">DevOps Guru & CodeGuru Profiler - London, UK</h5>
                    <p>
                        Working as a full-stack engineer working across CodeGuru Profiler and DevOps Guru.
                        I working with Senior Product Managers, Principal Engineers, Senior UX Designers,
                        Documentation Writters and Managers to launch new features for both {" "}
                        <a href="https://aws.amazon.com/codeguru/">CodeGuru Profiler</a> and {" "} 
                        <a href="https://aws.amazon.com/devops-guru/">DevOps Guru</a>. I lead projects such
                        as DevOps Guru integration into RDS which led to a 30% increase in customers. I also designed, 
                        implemented, and launched new customer-facing features for both products such as profile
                        comparison visualizations a new onboarding workflow.<br/><br/>
                        
                        I also regularly improving and simplifying development and operational processes such as, <br/>
                        - Improving our teams pipelines to be fully CD and ran a project to move all of the product's
                        pipelines to full CD. <br/>
                        - Moved away from a manually creating alarm and moved all our remaining infrastructure to CDK. <br/>
                        - Fixed over-provisioned databases which led to a ~$1 millon saving annually.
                    </p>
                    <ul className="skills">
                        <li>Java</li>
                        <li>Typescript</li>
                        <li>CDK</li>
                        <li>JavaScript</li>
                        <li>AWS</li>
                        <li>React</li>
                        <li>DynamoDB</li>
                        <li>Lambda</li>
                        <li>RDS</li>
                    </ul>
                    </Col>
                </Row>
        
                {/* Amazon SDE 2*/}
                <Row className="experience-card">
                    <Col md={2}>
                        <p>Sep 2019 - Oct 2020</p>
                    </Col>
                    <Col md={10}>
                        <h3>Software Engineer II • Amazon</h3>
                        <h5 className="subheading">Prime Video - London, UK</h5>
                        <p>
                            Designed and Implemented a predictive alarming system monitoring all Prime Video
                            metrics to detect anomalies across all 8000+ Prime Video devices. I worked at all
                            levels of this project from requirement gathering to deployment and maintenance.<br/><br/>
                            Lead portions of the project working with senior and junior engineers. Developed on 
                            AWS cloud using technologies such as Lambda, S3, Kinesis, Sagemaker, SNS, SQS, Elasticsearch 
                            and DynamoDB. Enabled team to perform full CD deployments.
                        </p>
                        <ul className="skills">
                            <li>Lambda</li>
                            <li>DynamoDB</li>
                            <li>S3</li>
                            <li>Kinesis</li>
                            <li>SNS</li>
                            <li>SQS</li>
                            <li>Sagemaker</li>
                            <li>TypeScript</li>
                            <li>Node.JS</li>
                            <li>Python</li>
                            <li>Java</li>
                        </ul>
                    </Col>
                </Row>
    
                {/* Amazon SDE 1*/}
                <Row className="experience-card">
                    <Col md={2}>
                        <p>Jun 2017 - Sep 2019</p>
                    </Col>
                    <Col md={10}>
                        <h3>Software Engineer I • Amazon</h3>
                        <h5 className="subheading">Prime Video: Builder Tools - London, UK</h5>
                        <p>
                            Developed tools to improve the speed and quality of software development
                            across Prime Video client organizations by building systems that close the
                            gap between the specific development and testing needs of Prime Video and
                            the general-purpose tools provided by Amazon.<br/><br/>
                            Implemented and maintained an ELK stack (Elasticsearch, Logstash and Kibana)
                            which ingested all Prime Video logs (46TB a day) to help developers to deep
                            dive issues in their system. Designed, implemented and maintained a ticket
                            routing system which enriched and quickly reassigned tickets to the correct
                            team developed using AWS services.
                        </p>
                        <h5 className="subheading">Prime Video - Living Room Client Team - London, UK</h5>
                        <p>
                            Created a Hybrid component to work on all Living Room Prime Video devices to
                            enable the Living Room Client teams to launch two applications at the same
                            time. This enabled the living room teams to re-architecture their application
                            and deliver value to customers quicker. This allowed the team to deliver
                            incrementally to meet the goals of delivering the English Premier League
                            to Prime Video.
                        </p>
                        <ul className="skills">
                            <li>Java</li>
                            <li>ElasticSearch</li>
                            <li>LogStash</li>
                            <li>Kinesis</li>
                            <li>Kibana</li>
                            <li>Typescript</li>
                            <li>Node.JS</li>
                            <li>React</li>
                            <li>JavaScript</li>
                        </ul>
                    </Col>
                </Row>
    
                <Row className="experience-card">
                    <Col md={2}>
                        <p>Sep 2016 - Apr 2017</p>
                    </Col>
                    <Col md={10}>
                        <h3>Lab Demonstrator • University of Glasgow</h3>
                        <h5 className="subheading">Glasgow, Scotland</h5>
                        <p>
                            Lab demonstrator for a Java and Object Oriented class. My duties as a demonstrator
                            was to help the second year class with any problems they had with Java and object
                            oriented programming practices. This enhanced my understanding of Java and communication
                            of technical problems and solutions.
                        </p>
                        <ul className="skills">
                            <li>Java</li>
                        </ul>
                    </Col>
                </Row>
        
                <Row className="experience-card">
                    <Col md={2}>
                        <p>Jun 2016 - Aug 2016</p>
                    </Col>
                    <Col md={10}>
                        <h3>Software Engineer Intern • Amazon</h3>
                        <h5 className="subheading">People Tech - Edinburgh, Scotland</h5>
                        <p>
                            A twelve week internship using technologies such as Scala, Spark,
                            NodeJS, Alexa Skill Kit(ASK) and the Alexa Voice Service(AVS).
                        </p>
                        <ul className="skills">
                            <li>JavaScript</li>
                            <li>AWS</li>
                            <li>Lambda</li>
                            <li>Node.JS</li>
                            <li>ASK/AVS</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Experience;

