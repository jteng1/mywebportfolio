import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <Container fluid id="portfolio" className="portfolio-section">
                <Row>
                    <Col xs={12}>
                        <h1 className="portfolio-header">Portfolio</h1>
                    </Col>  

                    <Col xs={12} sm={3}>
                        <Card className="project">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col> 

                    <Col xs={12} sm={3}>
                        <Card className="project">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={3}>
                        <Card className="project">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} sm={3}>
                        <Card className="project">
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                    </Col> 
                </Row>
            </Container>
        )
    }
}
