import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <Container fluid className='footer'>
        <a href='#home' className='up-button'>
          <i className='fa fa-chevron-circle-up' aria-hidden='true' />
        </a>
        <div id='links' className='footer-links'>
          {/* LinkedIn */}
          <a
            href='https://www.linkedin.com/in/jteng1/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fa fa-linkedin-square' aria-hidden='true' />
          </a>
          {/* Github */}
          <a
            href='https://github.com/nekasrofd'
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
          <a href='#resume'>
            <i className='fa fa-file' aria-hidden='true' />
          </a>
        </div>
        <h2 className='copyright'>
          This site is developed in React.js by Justin Teng
        </h2>
      </Container>
    );
  }
}
