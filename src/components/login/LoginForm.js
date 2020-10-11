// Libraries
import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import alertify from "alertifyjs";
import Cookies from "js-cookie";

// LoginForm class
export default class LoginForm extends Component {
  state = {
    name: "",
    email: "",
  };

  // Saves user's input to state while typing
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  // Checks if user entered valid name & e-mail combination or not
  checkCredentials = () => {
    const user = localStorage.getItem(this.state.email);
    if (user && JSON.parse(user).name === this.state.name) return true;
    else return false;
  };

  // Redirects to dashboard if user entered valid name & e-mail combination, otherwise shows message
  onClickHandler = (event) => {
    event.preventDefault();
    if (this.checkCredentials()) {
      Cookies.set("logged_user", this.state.email);
      window.location.href = "/dashboard";
    } else alertify.error("Wrong name & e-mail combination. Please try again.");
  };

  render() {
    return (
      <div>
        <Container className="text-center my-auto">
          <Row className="d-flex justify-content-center">
            <Col lg="3" md="5" sm="8" xs="11">
              <FontAwesomeIcon icon={faUserCircle} className="text-dark" style={{ "font-size": "128px" }} />
              <h5>Login</h5>
              <Form className="mx-auto my-2 text-left">
                <FormGroup className="mx-auto">
                  <Label for="name">Name</Label>
                  <Input type="text" name="name" id="name" onChange={this.onChangeHandler} />
                </FormGroup>

                <FormGroup className="mx-auto">
                  <Label for="email">E-Mail Adress</Label>
                  <Input type="email" name="email" id="email" onChange={this.onChangeHandler} />
                </FormGroup>

                <FormGroup className="mx-auto">
                  <Button className="w-100 btn btn-info" onClick={this.onClickHandler}>
                    Login
                  </Button>
                </FormGroup>

                <FormGroup className="mx-auto">
                  Not a member?{" "}
                  <a href="/" className="text-decoration-none text-info">
                    Click to sign up.
                  </a>
                </FormGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
