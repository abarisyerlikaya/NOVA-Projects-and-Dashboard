// Signup section of main page

// Libraries
import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

// Signup class
export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    org: "",
  };

  // Checks if user entered a valid name and e-mail
  checkInputs = () => {
    if (this.state.name && this.state.email) return true;
    else return false;
  };

  // Saves the new user to local storage of browser
  saveUser = () => {
    if (!localStorage.getItem(this.state.email)) {
      localStorage.setItem(this.state.email, JSON.stringify({ name: this.state.name, org: this.state.org }));
      alertify.success("Signup succesful. Please login to access dashboard and projects.");
    } else alertify.error("This e-mail has been taken. Please try a different e-mail.");
  };

  // Saves user's input to state while typing
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  // Saves the user and clears input fields if inputs are valid, otherwise shows a message
  onClickHandler = (event) => {
    event.preventDefault();
    if (this.checkInputs()) {
      this.saveUser();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const org = document.getElementById("org");
      name.value = "";
      email.value = "";
      org.value = "";
    } else alertify.error("Please provide valid information!");
  };

  render() {
    return (
      <Row className="mx-1 mt-4">
        <Col xs="12" sm="9" md="6" lg="4" className="mx-auto border rounded">
          {/* Signup */}
          <Row className="mb-3">
            <Col className="rounded bg-dark text-white text-center py-2">
              <h5>Signup for Free</h5>
            </Col>
          </Row>

          {/* Text */}
          <Row className="text-center">
            <Col>
              <p>Please enter your credentials to sign up.</p>
            </Col>
          </Row>

          {/* Personal info */}
          <Row>
            <Form className="mx-auto pb-2">
              <FormGroup>
                <Label for="name">
                  <strong>Name *</strong>
                </Label>
                <Input type="text" name="name" id="name" onChange={this.onChangeHandler} />
              </FormGroup>

              <FormGroup>
                <Label for="email">
                  <strong>E-Mail Adress *</strong>
                </Label>
                <Input type="email" name="email" id="email" onChange={this.onChangeHandler} />
              </FormGroup>

              <FormGroup>
                <Label for="org">Organization (Optional)</Label>
                <Input type="text" name="org" id="org" onChange={this.onChangeHandler} />
              </FormGroup>

              <FormGroup>
                <Button color="info" className="w-100" onClick={this.onClickHandler}>
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}
