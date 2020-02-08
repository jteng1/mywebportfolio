import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import dogeatsgif from '../assets/dogeats.gif';
import blackjackgif from '../assets/blackjack.gif';
import itloggergif from '../assets/itlogger.gif';
import contactkeepergif from '../assets/contactkeeper.gif';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <Container fluid id='portfolio' className='portfolio-section'>
        <Row>
          <Col xs={12}>
            <h1 className='portfolio-header'>Projects</h1>
          </Col>
          <Col xs={12} sm={6}>
            <Card className='project'>
              <Card.Img variant='top' src={dogeatsgif} />
              <Card.Body>
                <Card.Title>
                  <a className='project-links' href='https://dog-eats.com'>
                    Dog Eats
                  </a>
                </Card.Title>
                <Card.Text>
                  Full-stack single-page application built with MongoDB,
                  Express.js, React.js, and Node.js (MERN Stack) that helps you
                  determines whether or not a food is safe for your dog to eat.
                  Authentication allows admin accounts the ability to perform
                  CRUD operations on database of foods. Built to be more
                  convenient than searching "Can my dog eat X?" on Google.
                </Card.Text>
                <Card.Text>
                  Uses React Context API for state management, JSONWebToken for
                  authentication, and utilizes RESTful API principles.
                </Card.Text>
                <Button
                  href='https://github.com/jteng1/DogEats'
                  variant='primary'
                  block
                >
                  View Code
                </Button>
                <Button href='https://dog-eats.com' variant='primary' block>
                  Live Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6}>
            <Card className='project'>
              <Card.Img variant='top' src={blackjackgif} />
              <Card.Body>
                <Card.Title>
                  <a
                    className='project-links'
                    href='https://jteng1.github.io/blackjack/'
                  >
                    Video Blackjack
                  </a>
                </Card.Title>
                <Card.Text>
                  Have you ever wanted to play Video Blackjack just like you
                  were playing on those machines in Las Vegas casinos? Well now
                  you can with this application inspired by exactly that! Has
                  all the necessary functions such as betting with fake money,
                  being able to double-down, and keeping track of game
                  statistics, just like the real thing!
                </Card.Text>
                <Card.Text>
                  Built with class based React components and utilizes the
                  DeckofCards API.
                  <br />
                  <br />
                  <br />
                </Card.Text>
                <Button
                  href='https://github.com/jteng1/blackjack'
                  variant='primary'
                  block
                >
                  View Code
                </Button>
                <Button
                  href='https://jteng1.github.io/blackjack/'
                  variant='primary'
                  block
                >
                  Live Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6}>
            <Card className='project'>
              <Card.Img variant='top' src={itloggergif} />
              <Card.Body>
                <Card.Title>
                  <a
                    className='project-links'
                    href='https://powerful-bayou-86248.herokuapp.com'
                  >
                    Issue Tracker
                  </a>
                </Card.Title>
                <Card.Text>
                  Full-stack SPA built with MongoDB, Express.js, React.js and
                  Node.js that allows you to keep track of all your issues to be
                  addressed. Allows multiple users the ability to keep track of
                  urgent/solved issues on a global list. Every user has the
                  ability to perform CRUD operations on the global list of
                  issues.
                </Card.Text>
                <Card.Text>
                  Uses Redux for state management, Material-UI for the design
                  and utilizes RESTful API principles.
                  <br />
                  <br />
                  <br />
                </Card.Text>
                <Button
                  href='https://github.com/jteng1/it-logger'
                  variant='primary'
                  block
                >
                  View Code
                </Button>
                <Button
                  href='https://powerful-bayou-86248.herokuapp.com'
                  variant='primary'
                  block
                >
                  Live Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6}>
            <Card className='project'>
              <Card.Img variant='top' src={contactkeepergif} />
              <Card.Body>
                <Card.Title>
                  <a
                    className='project-links'
                    href='https://intense-depths-64881.herokuapp.com'
                  >
                    Contact Keeper
                  </a>
                </Card.Title>
                <Card.Text>
                  Full-stack SPA built with MongoDB, Express.js, React.js and
                  Node.js that allows users to register/login to an account and
                  keep a list of personal contacts or professional contacts that
                  are unique to each account. Each user can also perform CRUD
                  operations on their contact list and search through their
                  contact list using various methods such as by e-mail, phone
                  number, or name.
                </Card.Text>
                <Card.Text>
                  Uses React Context API for state management, JSONWebToken for
                  authentication, and utilizes RESTful API principles.
                </Card.Text>
                <Button
                  href='https://github.com/jteng1/contact-keeper'
                  variant='primary'
                  block
                >
                  View Code
                </Button>
                <Button
                  href='https://intense-depths-64881.herokuapp.com'
                  variant='primary'
                  block
                >
                  Live Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
