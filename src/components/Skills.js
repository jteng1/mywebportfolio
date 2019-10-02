import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

export default class Skills extends Component {
  render() {
    return (
      <Container fluid id='skills' className='skills-section'>
        <Row className='row'>
          <Col sm={2}>
            <h1>
              <span>Skills</span>
            </h1>
          </Col>
          <Col className='items' sm={10}>
            <Row className='item'>
              <h3>Programming Languages</h3>
              <Row>
                <p className='info'>
                  Work primarily with HTML/CSS/JS, using frameworks to build
                  full stack applications using the MERN (MongoDB, Express.js,
                  React.js, Node.js) stack and creating RESTful APIs.
                </p>
                <p className='info'>
                  Always willing to learn whatever is needed for the project.
                </p>
              </Row>
              <h3>Database Systems</h3>
              <Row>
                <p className='info'>
                  Mainly utilizing MongoDB and Mongoose for data schemas in
                  current projects.
                </p>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
