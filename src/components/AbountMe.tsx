import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import HeadShot from '../images/headshot2.jpg';


const AboutMe = () => {
    return (
        <div className="section">
            <Container className="experience">
                <Row>
                    <Col md={12}>
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={8} sm={12}>
                        <p className="intro">
                            Hello, I’m Greg from Perth, Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿 I’ve been programming for over a decade and have
                            5+ years of experience as a software engineer. I started as a backend engineer doing
                            everything AWS and Java but found myself loving project with real customer
                            impact which led me to more full-stack work.<br /><br />

                            I have now worked on Prime Video’s livingroom app, implemented developer tools
                            for Prime Video Builder Tool, launched features and maintained multiple AWS services,
                            and led projects for customer-facing features which spanned across multiple AWS
                            services. During that time I have worked across many tech stacks and environments
                            and learned many programming languages on the way.<br /><br />

                            I have a real passion for learning new things and I’m not afraid to try anything new. As
                            a full-stack engineer I have experience working closely with senior product
                            managers, senior UX designers, principal engineers and managers.<br /><br />

                            I have recently taken time off work to travel with my wife around Europe in our
                            van, Judi! 🚐 I am now actively looking for a full-stack software engineering role
                            with real customer impact. <br /><br />
                        </p>
                    </Col>
                    <Col md={4} sm={12}>
                        <Image src={HeadShot} fluid roundedCircle />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;
