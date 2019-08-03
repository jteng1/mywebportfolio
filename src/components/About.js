import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
            <h2 id='contact-header'>Contact Details</h2>
            <a id='contact-link' href='mailto:justinteng@gmail.com'>
              justinteng@gmail.com
            </a>
            <h2 id='location-header'>Location</h2>
            <h2 id='location'>Cupertino, California</h2>
            <h2 id='resume-header'>Resume</h2>
            <a href={justinTengResume}>Download resume here</a>
          </Col>
        </Row>
      </Container>
    );
  }
}
