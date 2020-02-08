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
              Hi there, I'm Justin and I love writing code. I love how I can use
              code to bring my ideas to life and solve real-world problems using
              software. Deploying my first application that people were excited
              about was one of the most rewarding feelings I've ever
              experienced. It sparked a passion in me to always be thinking of
              new ways to use programming to further better the lives of people
              around the world. It has also made me appreciate the fact that I
              will never stop learning and that it's possible to leverage all of
              my existing knowledge and consolidate it into something that can
              be impactful through software.
            </p>
            <p>
              I'm a firm believer in that coding is just a tool that helps solve
              problems. At the end of the day it's people working towards the
              same goal that can make even the most impossible of problems
              possible. I strive to find like-minded individuals to collaborate
              with so feel free to contact me and check out the projects I'm
              working on below.
            </p>
          </Col>
          <Col className='main-column' xs={12} sm={6}>
            <h2 id='contact-header'>Contact Details</h2>
            <a id='contact-link' href='mailto:justinteng@gmail.com'>
              justinteng@gmail.com
            </a>
            <h2 id='location-header'>Location</h2>
            <h2 id='location'>Cupertino, California</h2>
            <h2 id='resume-header'>Resume</h2>
            <a href={justinTengResume}>View resume</a>
          </Col>
        </Row>
      </Container>
    );
  }
}
