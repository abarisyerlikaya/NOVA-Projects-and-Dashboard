// Navigation bar of main page

// Libraries
import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

// Navi component with hooks
const Navi = (props) => {
  return (
    <div>
      <Navbar color="dark" light expand="md" className="px-5 navbar-dark">
        <NavbarBrand className="px-5 text-light" href="/">
          NOVA Projects & Dashboard
        </NavbarBrand>

        <Nav className="mr-auto" navbar></Nav>

        <Nav navbar className="text-secondary px-5">
          <NavItem>
            <a href="/login" className="text-decoration-none text-light">
              <FontAwesomeIcon icon={faSignInAlt} />
              &nbsp;Login
            </a>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Navi;
