// Projects page

// Libraries
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Components
import Sidebar from "../toolbox/Sidebar";
import Navi from "../toolbox/Navi";
import Content from "./Content";

// Styles
import "./Projects.css";

// Projects class
export default class Projects extends Component {
  render() {
    if (!this.props.isLoggedIn()) window.location.href = "/";
    else
      return (
        <Container fluid>
          <Row className="h-100 d-flex flex-md-column">
            <Col sm="2" className="p-0" id="sticky-col">
              <Sidebar />
            </Col>

            <Col sm="10" className="p-0 ml-auto">
              <Navi />
              <Content />
            </Col>
          </Row>
        </Container>
      );
  }
}