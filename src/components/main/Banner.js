// Banner of main page

// Libraries
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

// Styles
import "./Banner.css"

// Banner class
export default class Banner extends Component {
  render() {
    return (
      <Row className="text-light mx-1 my-2 py-4 bg-info bg-death-star rounded">
        <Container>
          <Row>
            <Col className="px-5 pt-1 text-center">
              <h2>Welcome to NOVA Projects & Dashboard</h2>
            </Col>
          </Row>
        </Container>
      </Row>
    );
  }
}
