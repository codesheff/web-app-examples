import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg'

const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = ({ title }) => {
    // this returns jsx ( JavaScript XML )
    // in jsx you can put java script code inside curly brackets {}
    return (
        <Navbar style={navbarStyle} variant="light">
            <Container>
                <Logo alt={title} style={{ maxWidth: '12rem', maxHeight: '3rem'}}/>
            </Container>
        </Navbar>
    )
};

export default Header;