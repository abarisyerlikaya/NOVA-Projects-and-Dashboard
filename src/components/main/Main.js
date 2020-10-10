// Main page

// Libraries
import React, { Component } from "react";
import { Container } from "reactstrap";

// Components
import Navi from "./Navi";
import Banner from "./Banner";
import Signup from "./Signup";
import ContactUs from "./ContactUs";
import Footer from "../toolbox/Footer";
import Resume from "./Resume";

// Main class
export default class Main extends Component {
  render() {
    if (this.props.isLoggedIn()) window.location.href = "/dashboard";
    else
      return (
        <div className="bg bg-light">
          <Navi />
          <Container>
            <Banner />
            <Resume />
            <Signup />
            <ContactUs />
          </Container>
          <Footer />
        </div>
      );
  }
}
