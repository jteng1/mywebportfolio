import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skills.css';

export default class Skills extends Component {
    render() {
        return (
            <Container fluid id="skills" className="skills-section">
                <Row className="row">
                    <Col sm={2}>
                    <h1>
                        <span>Skills</span>
                    </h1>
                    </Col>
                    <Col className="items" sm={10}>
                        <Row className="item">
                            <h3>Programming Languages</h3>
                            <Row>
                                <p className="info">
                                Work primarily with JavaScript and Python, with frameworks such as Express.js, React.js, Django and Flask. Primarily building projects with the MERN stack and implementing object-oriented design.
                                </p>
                            </Row>
                            <h3>Database Systems</h3>
                            <Row>
                                <p className="info">
                                Experience working with both SQL and NoSQL databases. Mainly utilizing MongoDB in current projects.
                                </p>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
