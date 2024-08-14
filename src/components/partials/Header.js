import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../../styles/CustomStyles.css';


function Header() {

    const [show, setShow] = React.useState(true); // Default : Show nav

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Navbar bg="dark" variant="dark" fixed="top">
            <Button variant="primary" onClick={handleShow} className="me-2">
                Menu
            </Button>
            <Navbar.Brand href="/" style={{ color: 'white' }}>My Portfolio</Navbar.Brand>
        </Navbar>

        <Offcanvas show={show} onHide={handleClose} placement="start">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Navigation</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link as={Link} to="about" smooth={true} duration={300} onClick={handleClose}>
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="archive" smooth={true} duration={300} onClick={handleClose}>
                            Archive
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="career" smooth={true} duration={300} onClick={handleClose}>
                            Career
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="contact" smooth={true} duration={300} onClick={handleClose}>
                            Contact
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    </>
    );
}

export default Header;
