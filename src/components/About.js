import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';
import profilepic from "../assets/profilepic.jpeg"

export default class About extends Component {
    render() {
        return (
            <Container fluid id="about" className="about-section">
                <Row className="row">
                    <Col className="secondary-column" xs={12} sm={2}>
                        <Image src={profilepic} className="profile-pic"/>
                    </Col>
                    <Col className="main-column" xs={12} sm={10}>
                        <h2>About Me</h2>
                        <p>Conscientious, results-driven, articulate and analytical software engineer with many years of professional exposure in data-driven software engineering teams focusing on roles ranging from backend development of high availability, distributed systems. Strong in architectural research, software design and agile team management, having served as a tech lead at multiple companies</p>                        
                        <p>Excellent written and verbal communication skills. Interested in challenging technical leadership roles in scaling distributed web applications.</p>
                        <h2>Contact Details</h2>
                        <p>justinteng@gmail.com</p>
                        <p>Cupertino, California</p>
                        <a href="mailto:justinteng@gmail.com">Contact Me</a>  
                    </Col>
                </Row>
            </Container>
        )
    }
}
