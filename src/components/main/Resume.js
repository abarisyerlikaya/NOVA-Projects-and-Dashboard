// Resume section of main page

// Libraries
import React, { Component } from "react";
import { Row, Col } from "reactstrap";

// Styles
import "./Resume.css"

// Resume class
export default class Resume extends Component {
  render() {
    return (
      <Row className="text-light mx-1 my-2 py-4 bg-secondary bg-boxes rounded">
        <Col className="px-5 text-center">
          <section>
            You could manage your projects here. We provide the opportunity to see your project reports, analyze the
            project data, schedule tasks and check the stats via dashboard. You can also select excel files from your
            disk and preview it on the projects page. If you don't have an account, sign up to get started. You will be
            able to access the dashboard after login.
          </section>
        </Col>
      </Row>
    );
  }
}
