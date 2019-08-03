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
                  An application to determine whether or not a type of food is
                  okay to feed a dog.
                </Card.Text>
                <Button
                  href='https://github.com/nekasrofd/DogEats'
                  variant='primary'
                  block
                >
                  Code
                </Button>
                <Button
                  href='https://dogeats.justinteng.com'
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
                <Card.Title>Blackjack</Card.Title>
                <Card.Text>
                  A Blackjack game built in React to mimic playing Video
                  Blackjack at a casino. Has chip betting, statistics, and more.{' '}
                </Card.Text>
                <Button
                  href='https://github.com/nekasrofd/blackjack'
                  variant='primary'
                  block
                >
                  Code
                </Button>
                <Button
                  href='https://blackjack.justinteng.com'
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
                <Card.Title>Contact Keeper</Card.Title>
                <Card.Text>
                  Full stack Contact Keeper application that has authentication
                  to allow each user to perform CRUD operations on their own set
                  of contacts.
                </Card.Text>
                <Button
                  href='https://github.com/nekasrofd/contact-keeper'
                  variant='primary'
                  block
                >
                  Code
                </Button>
                <Button
                  href='https://contacts.justinteng.com'
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
                <Card.Title>Github Finder</Card.Title>
                <Card.Text>
                  Application that allows you to search for Github users and see
                  their details/repos.
                </Card.Text>
                <Button
                  href='https://github.com/nekasrofd/github-finder'
                  variant='primary'
                  block
                >
                  Code
                </Button>
                <Button
                  href='https://githubfinder.justinteng.com'
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
