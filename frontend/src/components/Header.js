import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = ({ title }) => {
    // this returns jsx ( JavaScript XML )
    // in jsx you can put java script code inside curly brackets {}
    return (
        <Navbar style={navbarStyle} variant="light">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;