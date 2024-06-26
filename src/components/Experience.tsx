import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Experience = () => {
    return (
        <div className="section">
            <Container className="experience">
                <Row>
                    <Col md={12}>
                        <h1>Experience</h1>
                    </Col>
                </Row>
                <hr />

                <h3 className="summary-heading">Experienece Summary</h3>
                <ul className="summary-list">
                    <li>5+ years as a Software Engineer for Amazon and AWS</li>
                    <li>First-class Honours Software Engineering degree from the University of Glasgow</li>
                    <li>My idea was selected for Amazon's Innovation Kickstarter and launched at Re:Invent
                        2021 - 
                        <a href="https://aws.amazon.com/aws-cost-management/aws-customer-carbon-footprint-tool/" target="_blank" rel="noopener noreferrer">
                            AWS's Customer Carbon Footprint Tool
                        </a></li>
                    <li>Led projects working with Senior Product Managers, Principal Engineers, Senior UX Designers,
                        Documentation Writers and Managers to launch new features for AWS</li>
                    <li>2 years working for AWS developing customer-facing features for DevOps Guru and
                        CodeGuru Profier</li>
                    <li>2 years working for Prime Video Builder Tool creating developer tools</li>
                    <li>1 year working for Prime Video Livingroom implementing a hybrid mechanism to allow for
                        the new Prime Video application to be created</li>
                </ul>



                {/* AWS */}
                <Row className="experience-card">
                    <Col md={2}>
                        <p>Oct 2020 - Dec 2022</p>
                    </Col>
                    <Col md={10}>
                        <h3>Software Engineer II <span className="purple">•</span> AWS</h3>
                        <h5 className="subheading">DevOps Guru & CodeGuru Profiler - London, UK</h5>
                        <p>
                            Working as a full-stack engineer across CodeGuru Profiler and DevOps Guru.
                            I worked with Senior Product Managers, Principal Engineers, Senior UX Designers,
                            Documentation writers and Managers to launch new features for both {" "}
                            <a href="https://aws.amazon.com/codeguru/" target="_blank" rel="noopener noreferrer">CodeGuru Profiler</a> and {" "}
                            <a href="https://aws.amazon.com/devops-guru/" target="_blank" rel="noopener noreferrer">DevOps Guru</a>. I led projects such as DevOps
                            Guru integration into RDS which led to a 30% increase in customers. I also designed,
                            implemented, and launched new customer-facing features for both products, such as profile
                            comparison visualizations and a new onboarding workflow.<br /><br />

                            I also regularly improved and simplified development and operational processes such as: <br />
                            - Improving our teams pipelines to be fully CD and ran a project to move all of the product's
                            pipelines to full CD. <br />
                            - Moved away from manually creating alarms and moved all our remaining infrastructure to CDK. <br />
                            - Fixed over-provisioned databases which led to a ~$1 million saving annually.
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
                            Designed and implemented a predictive alarming system monitoring all Prime Video
                            metrics to detect anomalies across all 8000+ Prime Video devices. I worked at all
                            levels of this project from requirement gathering to deployment and maintenance.<br /><br />
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
                            the general-purpose tools provided by Amazon.<br /><br />
                            Implemented and maintained an ELK stack (Elasticsearch, Logstash and Kibana)
                            which ingested all Prime Video logs (46TB a day) to help developers deep
                            dive into issues in their system. Designed, implemented and maintained a ticket
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

