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
                                Worked primarily with JavaScript, Python and C++, with frameworks such as Express.js, Koa.js, React.js, Django and Flask. Interested in functional programming and serverless architectures, exploring with Erlang and AWS Lambda respectively.
                                </p>
                            </Row>
                            <h3>Database Systems</h3>
                            <Row>
                                <p className="info">
                                Experienced in both SQL and NoSQL, having worked in companies making use of DynamoDB, MongoDB, PostgreSQL and Aurora RDS flavour of MySQL, with personal further projects utilizing RethinkDB.
                                </p>
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
