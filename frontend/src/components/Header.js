import React from 'react';

import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';//import in curly brackets to make jsx work?

const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = ({title}) => {

    
    // this returns jsx ( JavaScript XML )
    // in jsx you can put java script code inside curly brackets {}
    return(
        <Navbar style={navbarStyle} variant="light">
            <Container>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default Header;

