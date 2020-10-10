// Navigation bar of login page

// Libraries
import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

// Navi component with hooks
const Navi = (props) => {
  return (
    <div>
      <Navbar color="dark" light className="justify-content-between">
        <NavbarBrand className="text-light" href="/">
          NOVA Projects & Dashboard
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Navi;
