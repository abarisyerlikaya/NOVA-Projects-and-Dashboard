// Content of projects page

// Libraries
import React, { Component } from "react";
import { Container, Row, Col, Input, Table } from "reactstrap";
import readXlsxFile from "read-excel-file";

// Content class
export default class Content extends Component {
  state = {
    fileName: "",
    projectId: "",
    rows: [[]],
  };

  // Saves the file which user selected to state
  saveFile = async (event) => {
    this.setState({ fileName: event.target.files[0].name, projectId: Date.now() });
    readXlsxFile(event.target.files[0]).then((rows) => {
      this.setState({ rows: rows });
    });
  };

  render() {
    return (
      <Container fluid className="text-secondary p-4">
        <Container className="border bg-light p-4">
          <Row className="mb-4">
            <Col xs="3">
              <h6>Project Description</h6>
            </Col>
            <Col xs="6">File Description</Col>
            <Col xs="3">{this.state.fileName}</Col>
          </Row>

          <Row className="mb-4">
            <Col xs="3"></Col>
            <Col xs="6">Project ID</Col>
            <Col xs="3">{this.state.projectId}</Col>
          </Row>

          <Row className="mb-4">
            <Col xs="3">
              <h6>Upload Excel</h6>
            </Col>
            <Col xs="6">
              <Input type="file" onChange={(event) => this.saveFile(event)}>
                Upload
              </Input>
            </Col>
            <Col xs="3"></Col>
          </Row>

          <Row className="mb-4">
            <Col xs="3">
              <h6>Input Report</h6>
            </Col>
            
            <Col xs="6">
              <Table bordered striped size="sm" id="table">
                <thead>
                  <tr>
                    {this.state.rows[0].map((col, index) => (
                      <th>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {this.state.rows.map((row, index) => (
                    <tr>
                      {row.map((col, index) => (
                        <td>{col}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
