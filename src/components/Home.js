import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import justinTengResume from '../assets/justinTengResume.pdf';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Container fluid id='home' className='home-section'>
        <Row>
          <Col xs={12}>
            <h1 id='headline'>Justin Teng</h1>
            <h3 id='tagline'>Software Developer</h3>
            <div id='links' className='social-links'>
              {/* LinkedIn */}
              <a
                href='https://linkedin.com/in/jteng1/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-linkedin-square' aria-hidden='true' />
              </a>
              {/* Github */}
              <a
                href='https://github.com/jteng1/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fa fa-github-square' aria-hidden='true' />
              </a>
              {/* Mail */}
              <a href='mailto:justinteng@gmail.com'>
                <i className='fa fa-envelope' aria-hidden='true' />
              </a>
              {/* Resume */}
              <a href={justinTengResume}>
                <i className='fa fa-file' aria-hidden='true' />
              </a>
            </div>
            <div>
              <a id='buttonDown' href='#about' className='down-button'>
                <i className='fa fa-chevron-circle-down' aria-hidden='true' />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
