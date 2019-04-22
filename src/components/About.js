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
                        <p>Self-taught developer that is conscientious, results-driven, articulate, and analytical. Always eager to learn new things and have a passion for any project that uses technology to further better our lives. Have a strong technological background with professional experience in roles dealing with data analytics, sales, technical writing, management and teaching. Looking to transition into a software/web development role.</p> <p>Excellent written and verbal communication skills. Interested in further developing my skills as a developer.</p>
                        <h2>Contact Details</h2>
                        <a href="mailto:justinteng@gmail.com">justinteng@gmail.com</a>
                        <h2>Location</h2>
                        <p>Cupertino, California</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
