import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Work.css';

export default class Work extends Component {
  render() {
    return (
      <Container fluid id='work' className='work-section'>
        <Row>
          <Col sm={2}>
            <h1>
              <span>Work</span>
            </h1>
          </Col>

          <Col className='items' sm={10}>
            {/* Work 1 */}
            <Row className='item'>
              <h3>Toyota Research Institute</h3>
            </Row>
            <Row>
              <p className='info'>
                Simulation Operations Specialist
                <span> • </span>
                <span>Los Altos, California</span>
                <span> • </span>
                <span>Jan 2020 - Present</span>
              </p>
              <div className='points'>
                <p className='point'></p>
              </div>
            </Row>
            {/* Work 2 */}
            {/* <Row className='item'>
              <h3>The Princeton School</h3>
            </Row>
            <Row>
              <p className='info'>
                Teacher
                <span> • </span>
                <span>Taipei, Taiwan</span>
                <span> • </span>
                <span>Jul 2016 - May 2018</span>
              </p>
              <div className='points'>
                <p className='point'>
                  Created new curriculum for English Comprehension that improved
                  student test scores by average of 20%.
                </p>
              </div>
            </Row> */}
            {/* Work 3 */}
            {/* <Row className='item'>
              <h3>Legend Learning Center</h3>
            </Row>
            <Row>
              <p className='info'>
                Teacher
                <span> • </span>
                <span>Cupertino, California</span>
                <span> • </span>
                <span>Sep 2015 - Jun 2016</span>
              </p>
              <div className='points'>
                <p className='point'>
                  Taught Junior Scholar program to elementary school students
                  that aided their academic enrichment in math, reading, and
                  writing.
                </p>
                <p className='point'>
                  Developed curriculum that integrated concepts and skills
                  applicable to programming, physics, and creative problem
                  solving with a popular video game.
                </p>
                <p className='point'>
                  Worked with parents to create productive academic plans
                  tailored for each student's personal success and received high
                  praises for impact on student grades and test scores.
                </p>
              </div>
            </Row> */}
            {/* Work 4 */}
            <Row className='item'>
              <h3>AnCAD, Inc.</h3>
            </Row>
            <Row>
              <p className='info'>
                Quality Assurance Specialist
                <span> • </span>
                <span>Taipei, Taiwan</span>
                <span> • </span>
                <span>Dec 2013 - Aug 2015</span>
              </p>
              <div className='points'>
                <p className='point'>
                  Performed inspections and conducted testing of in house
                  software to ensure production deployments were of high-quality
                  and free from bugs and errors.
                </p>
                <p className='point'>
                  Maintained testing environments at research facilities,
                  university laboratories, and manufacturing plants to
                  collect/analyze data and evaluate efficiencies to improve
                  processes.
                </p>
                <p className='point'>
                  Analyzed equipment and machinery malfunctions to identify root
                  causes and resolve issues through the use of data analytics.
                </p>
                <p className='point'>
                  Developed and executed method to obtain post-production
                  product feedback from customers, which increased satisfaction
                  ratings by 30%.
                </p>
                <p className='point'>
                  Handled all aspects of technical writing, including technical
                  documentation, bug reports, and version update logs.
                </p>
                <p className='point'>
                  Communicated client needs and specifications to engineering
                  team to better produce development path for subsequent
                  versions.
                </p>
              </div>
            </Row>
            {/* Work 5 */}
            <Row className='item'>
              <h3>IPPLUS Patent Office LLP</h3>
            </Row>
            <Row>
              <p className='info'>
                Quality Assurance Specialist
                <span> • </span>
                <span>Taipei, Taiwan</span>
                <span> • </span>
                <span>Jan 2013 - Dec 2013</span>
              </p>
              <div className='points'>
                <p className='point'>
                  Thoroughly inspected 500+ patents to ensure related patents
                  were of high quality and free from errors and inconsistencies.
                </p>
                <p className='point'>
                  Improved related processes to obtaining a patent including
                  researching prior art and protecting intellectual property.
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
