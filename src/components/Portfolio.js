import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import project1 from '../assets/project1.jpg';
import './Portfolio.css';

export default class Portfolio extends Component {
  render() {
    return (
      <Container fluid id='portfolio' className='portfolio-section'>
        <Row>
          <Col xs={12}>
            <h1 className='portfolio-header'>Projects</h1>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className='project'>
              <Card.Img variant='top' src={project1} />
              <Card.Body>
                <Card.Title>Dog Eats</Card.Title>
                <Card.Text>
                  Full-stack application built with MongoDB, Express.js,
                  React.js, and Node.js (MERN Stack) that helps you determines
                  whether or not a food is safe for your dog to eat. Has
                  authentication to allow admin accounts the ability to perform
                  CRUD operations on foods. Built with the idea to be more
                  convenient than searching "Can my dog eat X?" on Google. Uses
                  React Context API for state management.
                </Card.Text>
                <Button
                  href='https://github.com/nekasrofd/DogEats'
                  variant='primary'
                  block
                >
                  Code
                </Button>
                <Button href='https://dog-eats.com' variant='primary' block>
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className='project'>
              <Card.Img variant='top' src={project1} />
              <Card.Body>
                <Card.Title>Contact Keeper</Card.Title>
                <Card.Text>
                  Full-stack application built with MongoDB, Express.js,
                  React.js and Node.js that allows users to sign up for an
                  account and keep a list of contacts that are unique to each
                  account. Each user can also perform CRUD operations on their
                  contact list and search through their contact list using
                  various methods such as by e-mail, phone number, or name. Uses
                  React Context API for state management.
                </Card.Text>
                <Button
                  href='https://github.com/nekasrofd/contact-keeper'
                  variant='primary'
                  block
                >
                  Code
                </Button>
                <Button
                  href='https://intense-depths-64881.herokuapp.com'
                  variant='primary'
                  block
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className='project'>
              <Card.Img variant='top' src={project1} />
              <Card.Body>
                <Card.Title>IT Logger</Card.Title>
                <Card.Text>
                  Full-stack application built with MongoDB, Express.js,
                  React.js and Node.js that allows an IT shop, or computer
                  repair shop to keep track of all their repairs/bug logs.
                  Allows multiple technicians the ability to keep track of
                  urgent/solved logs on a global list. Every technician has the
                  ability to perform CRUD operations on the global list of logs.
                  Uses Redux for state management and MaterialUI for the design.
                </Card.Text>
                <Button
                  href='https://github.com/nekasrofd/it-logger'
                  variant='primary'
                  block
                >
                  Code
                </Button>
                <Button
                  href='https://powerful-bayou-86248.herokuapp.com'
                  variant='primary'
                  block
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={3}>
            <Card className='project'>
              <Card.Img variant='top' src={project1} />
              <Card.Body>
                <Card.Title>Video Blackjack</Card.Title>
                <Card.Text>
                  Application inspired by the Video Blackjack games played at
                  casinos. Has betting, double-down, and statistics, just like
                  the real thing! Built with React and uses DeckofCards API.
                </Card.Text>
                <Button
                  href='https://github.com/nekasrofd/blackjack'
                  variant='primary'
                  block
                >
                  Code
                </Button>
                <Button
                  href='https://nekasrofd.github.io/blackjack/'
                  variant='primary'
                  block
                >
                  Demo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
