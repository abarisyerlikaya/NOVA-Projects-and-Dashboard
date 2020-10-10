// Libraries
import React, { Component } from "react";

// Components
import Navi from "./Navi";
import Footer from "../toolbox/Footer";
import LoginForm from "./LoginForm";

// Login class
export default class Login extends Component {
  render() {
    if (this.props.isLoggedIn()) window.location.href = "/dashboard";
    else
      return (
        <div className="d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
          <Navi />
          <LoginForm />
          <Footer />
        </div>
      );
  }
}
