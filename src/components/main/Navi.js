// Navigation bar of main page

// Libraries
import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

// Navi component with hooks
const Navi = (props) => {
  return (
    <Navbar color="dark" light className="px-auto justify-content-between sticky-top">
      <NavbarBrand className="text-light text-center" href="/">
        NOVA Projects & Dashboard
      </NavbarBrand>

      <Nav navbar className="text-secondary">
        <NavItem>
          <a href="/login" className="text-decoration-none text-light">
            <FontAwesomeIcon icon={faSignInAlt} />
            &nbsp;Login
          </a>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Navi;
