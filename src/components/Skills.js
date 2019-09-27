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
                  Work primarily with JavaScript and Python with experience
                  working with libraries and frameworks such as Express.js,
                  React.js, Django and Flask. Currently building full stack
                  projects with the MERN (MongoDB, Express.js, React.js,
                  Node.js) stack and working with RESTful APIs.
                </p>
                <p className='info'>
                  Heavily using React.js on the front-end with experience
                  designing and deploying websites with HTML/CSS while using
                  preprocessors and frameworks such as SASS and Bootstrap.
                </p>
                <p className='info'>
                  Ability to learn new languages and frameworks as needed for
                  the project.
                </p>
              </Row>
              <h3>Database Systems</h3>
              <Row>
                <p className='info'>
                  Experience working with both SQL and NoSQL databases. Mainly
                  utilizing MongoDB in current projects but also have experience
                  using MySQL and PostgreSQL.
                </p>
              </Row>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
