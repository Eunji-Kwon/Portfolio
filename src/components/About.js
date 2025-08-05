import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../styles/CustomStyles.css';
import '../index.css';

const About = () => {

    //const resumeUrl = process.env.PUBLIC_URL + '/assets/Resume.pdf';
    // const resumeUrl = `${process.env.PUBLIC_URL}/assets/Resume.pdf`;
    // console.log('Resume URL:', resumeUrl);
    const resumeUrl = process.env.PUBLIC_URL + '/assets/Resume.pdf';

    return (
        <section id="about" className="p-5">
            <Container>
                <Row className="mt-3 g-2">
                    <h1 className="playwrite-dk-uloopet-h1">Eunji Kwon</h1>
                    {/* <Col md={6} className="d-flex flex-column align-items-center"> */}
                        <h3 className="playwrite-dk-uloopet-h3">Software Developer</h3>
                        <p className="text">Blending creativity with code, I build software that resonates with end-users, creating intuitive and visually captivating experiences.</p>
                        {/* <Row className="mt-4">
                 
                        </Row> */}
                        <Row className="mt-3 g-1">
                        <Col className="text-center">
    <a href="mailto:sandeul97@gmail.com" className="social-link me-3" target="_blank" rel="noopener noreferrer">
        <i className="fas fa-envelope"></i>
    </a>
</Col>
                            <Col className="text-center">
                                <a href="https://github.com/Eunji-Kwon" className="social-link" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </Col>
                            <Col className="text-center">
                                <a href="https://www.linkedin.com/in/eunjik327/" className="social-link me-3" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </Col>
     
                            <Col className="text-center">
                                <button type="button" className="btn btn-primary position-relative me-3">
                                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        Resume
                                        <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </a>
                                </button>
                            </Col>
                        </Row>
                    {/* </Col> */}
                
                </Row>
            </Container>
        </section>
    );
};

export default About;
