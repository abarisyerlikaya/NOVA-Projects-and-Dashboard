// Navigation bar of login page

// Libraries
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

// Navi component with hooks
const Navi = (props) => {
  return (
    <div>
      <Navbar color="dark" light expand="md" className="px-5">
        <NavbarBrand className="px-5 text-light" href="/">
          NOVA Projects & Dashboard
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navi;
