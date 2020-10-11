// Footer of main and login pages

// Libraries
import React, { Component } from "react";

// Footer class
export default class Footer extends Component {
  render() {
    return (
      <div className="bg bg-dark text-light text-center py-2">
        Copyright © {new Date().getFullYear()} | NOVA Projects & Dashboard
      </div>
    );
  }
}
