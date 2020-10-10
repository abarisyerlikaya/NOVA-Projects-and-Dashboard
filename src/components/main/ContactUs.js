// Contact us section of main page

// Libraries
import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// ContactUs class
export default class ContactUs extends Component {
  render() {
    return (
      <div className="text-center py-4 mx-1 my-2">
        <Row>
          <Col>
            <h5>Contact Us</h5>
            <p className="my-2">You could contact us via our e-mail adress or phone number.</p>
          </Col>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <Col md="3" className="my-2">
            <a href="mailto:abarisyerlikaya@gmail.com">
              <Button outline color="info" className="float-right mr-lg-2 mr-md-0 w-100">
                <h6>Send E-Mail</h6>
                <h2>
                  <FontAwesomeIcon icon={faEnvelope} />
                </h2>
                <h6>abarisyerlikaya@gmail.com</h6>
              </Button>
            </a>
          </Col>

          <Col md="3" className="my-2">
            <a href="tel:+905061474839">
              <Button outline color="info" className="float-left ml-lg-2 ml-md-0 w-100">
                <h6>Call Us</h6>
                <h2>
                  <FontAwesomeIcon icon={faPhone} />
                </h2>
                <h6>+90 506 147 4839</h6>
              </Button>
            </a>
          </Col>
        </Row>
      </div>
    );
  }
}
