// Contents of dashboard page (graphics, tables etc.)

// Libraries
import React, { Component } from "react";
import { Container, Row, Col, Table, Badge } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSuitcase,
  faTasks,
  faUsers,
  faChartLine,
  faEllipsisV,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

// Images
import circleGraph from "../../img/circle-graph.png";

// Content class
export default class Content extends Component {
  render() {
    return (
      <Container fluid className="text-secondary">
        <Container className="p-4">
          <Row className="text-center mb-2">
            <Col className="border py-4 bg-light">
              <FontAwesomeIcon icon={faSuitcase} className="mb-2" />
              <h5>29</h5>
              <h6>Total Projects</h6>
            </Col>

            <Col className="border py-4 bg-light">
              <FontAwesomeIcon icon={faTasks} className="mb-2" />
              <h5>715</h5>
              <h6>Total Tasks</h6>
            </Col>

            <Col className="border py-4 bg-light">
              <FontAwesomeIcon icon={faUsers} className="mb-2" />
              <h5>31</h5>
              <h6>Members</h6>
            </Col>

            <Col className="border py-4 bg-light">
              <FontAwesomeIcon icon={faChartLine} className="mb-2" />
              <h5>93%</h5>
              <h6>Productivity</h6>
            </Col>
          </Row>

          <Row>
            <Col xs="4" className="border py-4 bg-light">
              <Row>
                <Col>
                  <h6 className="float-left">PROJECT STATUS</h6>
                </Col>

                <Col>
                  <FontAwesomeIcon icon={faEllipsisV} className="float-right" />
                </Col>
              </Row>

              <Row>
                <Col className="d-flex justify-content-center">
                  <img src={circleGraph} width="50%" alt="circle-graph" />
                </Col>
              </Row>

              <Row>
                <Col className="text-center my-4">
                  <p>
                    <strong>Click here </strong>to see detailed reports.
                  </p>
                  • • • • •
                </Col>
              </Row>
            </Col>

            <Col xs="8" className="border py-4 bg-light">
              <Row>
                <Col>
                  <h6 className="float-left">TASKS</h6>
                  <br />
                  <p className="float-left">
                    <strong>107</strong> tasks completed out of 195.
                  </p>
                </Col>

                <Col>
                  <FontAwesomeIcon icon={faEllipsisV} className="float-right" />
                </Col>

                <Table responsive className="mb-0">
                  <thead>
                    <tr className="text-muted small">
                      <th>PROJECT</th>
                      <th>STATUS</th>
                      <th>ASSIGNED TO</th>
                      <th>TIME SPEND</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Coffee detail page - Main Page</td>
                      <td>
                        <Badge color="danger">Outdated</Badge>
                      </td>
                      <td>Jerry F. Powell</td>
                      <td>12h 21min</td>
                      <td className="text-muted">
                        <FontAwesomeIcon icon={faEdit} /> <FontAwesomeIcon icon={faTrash} />
                      </td>
                    </tr>
                    <tr>
                      <td>Drinking bottle graphics</td>
                      <td>
                        <Badge color="warning">In-progress</Badge>
                      </td>
                      <td>Logan R. Cohn</td>
                      <td>3h 20min</td>
                      <td className="text-muted">
                        <FontAwesomeIcon icon={faEdit} /> <FontAwesomeIcon icon={faTrash} />
                      </td>
                    </tr>
                    <tr>
                      <td>App design and development</td>
                      <td>
                        <Badge color="success">Completed</Badge>
                      </td>
                      <td>Scott M. Smith</td>
                      <td>78h 05min</td>
                      <td className="text-muted">
                        <FontAwesomeIcon icon={faEdit} /> <FontAwesomeIcon icon={faTrash} />
                      </td>
                    </tr>
                    <tr>
                      <td>Poster illustration design</td>
                      <td>
                        <Badge color="warning">In-progress</Badge>
                      </td>
                      <td>John P. Ritter</td>
                      <td>26h 58min</td>
                      <td className="text-muted">
                        <FontAwesomeIcon icon={faEdit} /> <FontAwesomeIcon icon={faTrash} />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
