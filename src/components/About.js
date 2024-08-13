import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../CustomStyles.css'; // CustomStyles.css 파일 import
import '../index.css';

const About = () => {
    const [rotation, setRotation] = useState({ x: 15, y: 15, z: -100 });
    const [currentFace, setCurrentFace] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setRotation({ x: rotation.x, y: rotation.y - 45, z: rotation.z });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotation({ x: rotation.x, y: rotation.y + 45, z: rotation.z });
    };

    const rotateCube = () => {
        const faces = [
            { x: 15, y: 15, z: -100 }, // front
            { x: 15, y: -90, z: -100 }, // left
            { x: 15, y: 180, z: -100 }, // back
          
            { x: 15, y: 90, z: -100 }, // right
            { x: 90, y: 15, z: -100 }, // bottom
            { x: -90, y: 15, z: -100 }, //top
            { x: 15, y: 15, z: -100 }  // front again
        ];
        const nextFace = (currentFace + 1) % faces.length;
        setRotation(faces[nextFace]);
        setCurrentFace(nextFace);
    };
    //const resumeUrl = process.env.PUBLIC_URL + '/assets/Resume.pdf';
    // const resumeUrl = `${process.env.PUBLIC_URL}/assets/Resume.pdf`;
    // console.log('Resume URL:', resumeUrl);
    const resumeUrl = process.env.PUBLIC_URL + '/assets/Resume.pdf';
    const imageF = process.env.PUBLIC_URL + '/assets/imgs/ICET_LABCHECK.png';
    const imageB = process.env.PUBLIC_URL + '/assets/imgs/Pizza-Order-system-img.png';
    const imageL = process.env.PUBLIC_URL + '/assets/imgs/ctrlZ.PNG';
    const imageR = process.env.PUBLIC_URL + '/assets/imgs/Zealot.jpg';
    const imageT = process.env.PUBLIC_URL + '/assets/imgs/Snow-particle.jpg';
    const imageBTM = process.env.PUBLIC_URL + '/assets/imgs/Demo reel3.jpg';

    return (
        <section id="about" className="p-5">
            <Container>
                <Row className="mt-3 g-2">
                    <h1 className="playwrite-dk-uloopet-h1">Eunji Kwon</h1>
                    <Col md={6} className="d-flex flex-column align-items-center">
                        <h3 className="playwrite-dk-uloopet-h3">Software Developer</h3>
                        <p className="text">This is the About section.</p>
                        <Row className="mt-4">
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
                        <Row className="mt-3 g-2">
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
                        </Row>
                    </Col>
                    <Col md={6}>
                        <div className="cube-container">
                            <div className="cube" style={{ transform: `translate(-50%, -50%) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(${rotation.z}px)` }}>
                                <div className="cube-face cube-face-front">
                                    <img src={imageF} alt="Front" />
                                </div>
                                <div className="cube-face cube-face-back">
                                    <img src={imageB} alt="Back" />
                                </div>
                                <div className="cube-face cube-face-left">
                                    <img src={imageL} alt="Left" />
                                </div>
                                <div className="cube-face cube-face-right">
                                    <img src={imageR} alt="Right" />
                                </div>
                                <div className="cube-face cube-face-top">
                                    <img src={imageT} alt="Top" />
                                </div>
                                <div className="cube-face cube-face-bottom">
                                    <img src={imageBTM} alt="Bottom" />
                                </div>
                            </div>

                      
                                <button className="cube-btn"
                                 onMouseEnter={handleMouseEnter} 
                                 onMouseLeave={handleMouseLeave}
                                 onClick={rotateCube}
                                ></button>
                          

                     
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
