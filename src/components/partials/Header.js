import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import '../../styles/CustomStyles.css';


function Header() {

    const [show, setShow] = React.useState(true); // Default : Show nav

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="sidebar">
        <Navbar bg="dark" variant="dark" className="flex-column">
            <Navbar.Brand href="/" className="mb-4">My Portfolio</Navbar.Brand>
            <Nav className="flex-column">
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
                    <Nav.Link as={RouterLink} to="/archive">
                        Archive Page
                    </Nav.Link>
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
    </div>
    );
}

export default Header;
