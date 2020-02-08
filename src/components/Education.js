import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Education.css';

export default class Education extends Component {
  render() {
    return (
      <Container fluid id='education' className='education-section'>
        <Row className='row'>
          <Col sm={2}>
            <h1>
              <span>Education</span>
            </h1>
          </Col>
          <Col className='items' sm={10}>
            <Row className='item'>
              <h3>University of California, Santa Barbara</h3>
              <Row>
                <p className='info'>
                  Bachelor of Arts in Psychology
                  <span> • </span>
                  <span>Santa Barbara, California</span>
                  <span> • </span>
                  <span>Sep 2008 - Jun 2012</span>
                </p>
              </Row>
            </Row>
            <Row className='item'>
              <h3>Monta Vista High School</h3>
              <Row>
                <p className='info'>
                  Honor Roll
                  <span> • </span>
                  <span>Cupertino, California</span>
                  <span> • </span>
                  <span>Aug 2004 - Jun 2008</span>
                </p>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
