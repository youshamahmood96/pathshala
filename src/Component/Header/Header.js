import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <Navbar className='header-navbar' fixed='top'  expand="lg">
                <Navbar.Brand href="#home"> <FontAwesomeIcon icon={faUniversity } /> Pathshala</Navbar.Brand>
                <Nav.Link href="#cart">Cart</Nav.Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Explore" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Science">Science</NavDropdown.Item>
                            <NavDropdown.Item href="#Business">Business</NavDropdown.Item>
                            <NavDropdown.Item href="#Arts">Arts and Humanities</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="What do you want to learn.." className="mr-sm-8" />
                        <Button>Search</Button>
                        <Button className='login' variant='none'>Log In</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default Header;