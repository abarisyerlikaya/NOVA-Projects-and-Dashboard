// Sidebar component of dashboard and project pages

// Libraries
import React, { Component } from "react";
import { Container, Row, Col, Badge } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

// Sidebar class
export default class Sidebar extends Component {
  
  // When user clicks on sidebar, removes cookies of logged user
  signOut = () => {
    Cookies.remove("logged_user");
  };

  render() {
    return (
      <Container fluid className="bg-dark text-light h-100">
        <Row>
          <Col style={{ height: "100vh" }} className="d-flex flex-column justify-content-between">
            <a href="#foo" className="text-decoration-none text-light">
              <h4 className="text-center my-2">NOVA</h4>
            </a>
            <br />
            
            <h6>Navigation</h6>
            <small>
              <a href="/dashboard" className="text-decoration-none text-light">
                <FontAwesomeIcon icon={faHome} /> &nbsp; Dashboards <Badge color="info">4</Badge>
              </a>
            </small>
            <br />
            <br />
            
            <h6>Apps</h6>
            
            <div className="rounded w-100 bg-secondary" style={{ height: "100%" }}>
              <a href="/projects" className="text-decoration-none text-light">
                <h6 className="m-2">Projects</h6>
              </a>
            </div>
            <br />
            
            <div className="mb-2 mt-auto">
              <a href="/" className="text-decoration-none text-light" onClick={this.signOut}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
