import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../CustomStyles.css'; // CustomStyles.css 파일 import


function Header() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
          
            <Nav className="mr-auto">
                <Nav.Item>
                    <Nav.Link as={Link} to="about" smooth={true} duration={300}>
                        About
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="archive" smooth={true} duration={300}>
                        Archive
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Navbar.Brand href="/" style={{ color: 'black' }}>My Portfolio</Navbar.Brand>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="career" smooth={true} duration={300}>
                        Career
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="contact" smooth={true} duration={300}>
                        Contact
                    </Nav.Link>
                </Nav.Item>

            </Nav>
        </Navbar>
    );
}

export default Header;
