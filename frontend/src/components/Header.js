import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "lightblue",
};

const Header = ({ title }) => {
  // this returns jsx ( JavaScript XML )
  // in jsx you can put java script code inside curly brackets {}
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container>
        <p>Hi, this is the Header component</p>
      </Container>
    </Navbar>
  );
};

export default Header;
