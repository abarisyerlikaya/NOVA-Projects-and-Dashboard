// Navigation bar of dashboard and project pages

// Libraries
import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Form, Input, Button, Badge } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faTh, faCog } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

// Navi component with hooks
const Navi = (props) => {
  // Functions of navbar collapse
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Returns logged user if user is logged in, otherwise returns empty string
  const getLoggedUser = () => {
    const user = localStorage.getItem(Cookies.get("logged_user"));
    return user ? JSON.parse(user).name : "";
  };

  return (
    <Navbar color="light" light expand="md" className="border border-bottom">
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          &nbsp;
          <NavItem>
            <Form inline>
              <Input type="text" placeholder="Search..." />
              &nbsp;
              <Button outline color="info">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </Form>
          </NavItem>
          &nbsp;&nbsp;
        </Nav>
        <Nav navbar className="text-secondary">
          <NavItem>
            <a href="#foo" className="text-decoration-none text-secondary">
              <FontAwesomeIcon icon={faBell} className="float-left" />
              <Badge color="danger">!</Badge>
            </a>
          </NavItem>
          &nbsp;&nbsp;&nbsp;
          <NavItem>
            <a href="#foo" className="text-decoration-none text-secondary">
              <FontAwesomeIcon icon={faTh} />
            </a>
          </NavItem>
          &nbsp;&nbsp;&nbsp;
          <NavItem>
            <a href="#foo" className="text-decoration-none text-secondary">
              <FontAwesomeIcon icon={faCog} />
            </a>
          </NavItem>
          &nbsp;&nbsp;&nbsp;
          <NavItem className="border-left">&nbsp;&nbsp;{getLoggedUser()}</NavItem>
        </Nav>
        &nbsp;&nbsp;
      </Collapse>
    </Navbar>
  );
};

export default Navi;
