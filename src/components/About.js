import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import justinTengResume from '../assets/justinTengResume.pdf';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <Container fluid id='about' className='about-section'>
        <Row className='row'>
          <Col className='main-column' xs={12} sm={6}>
            <h2>About Me</h2>
            <p>
              Hi there, I'm Justin! Welcome to my website where I am showcasing
              some projects I've been working on recently.
            </p>
            <p>
              I'm a software developer that is conscientious, results-driven,
              articulate, and analytical. I'm always eager to learn new things
              and have a passion for any project that uses technology to further
              better our lives. Have a strong technological background with
              professional experience in roles dealing with data analytics,
              sales, and technical writing. Currently teaching while also
              working on personal projects to further my skills as a developer.
            </p>
            <p>Looking to transition into a software development role.</p>
          </Col>
          <Col className='main-column' xs={12} sm={6}>
            <h2>Contact Details</h2>
            <i className='fa fa-envelope' aria-hidden='true' />
            <a href='mailto:justinteng@gmail.com'>justinteng@gmail.com</a>
            <h2>Location</h2>

            <h2 id='location'>
              <i className='fa fa-map-marker' aria-hidden='true' />
              Cupertino, California
            </h2>

            <h2 id='resume'>Resume</h2>

            <h2 id='resume'>
              <i className='fa fa-file' aria-hidden='true' />
              <a href={justinTengResume}>Resume</a>
            </h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
