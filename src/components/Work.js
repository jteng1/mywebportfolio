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
              <h3>Legend College Prepatory</h3>
            </Row>
            <Row>
              <p className='info'>
                Teacher
                <span> • </span>
                <span>Cupertino, California</span>
                <span> • </span>
                <span>Aug 2018 - Present</span>
              </p>
              <div className='points'>
                <p className='point'>
                  Currently tutoring students high school and AP level
                  mathematics, physics, computer science and statistics.
                </p>
              </div>
            </Row>
            {/* Work 2 */}
            <Row className='item'>
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
            </Row>
            {/* Work 3 */}
            <Row className='item'>
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
                  praises from parents for impact had on student grades and test
                  scores.
                </p>
              </div>
            </Row>
            {/* Work 4 */}
            <Row className='item'>
              <h3>AnCAD, Inc.</h3>
            </Row>
            <Row>
              <p className='info'>
                Sales Engineer
                <span> • </span>
                <span>Taipei, Taiwan</span>
                <span> • </span>
                <span>Dec 2013 - Aug 2015</span>
              </p>
              <div className='points'>
                <p className='point'>
                  Proactively identified ways to utilize data visualization to
                  better help potential clients understand areas in which data
                  analytics will offer many benefits in their specific use case
                  scenarios.
                </p>
                <p className='point'>
                  Produced detailed reports to clients that included analysis on
                  Enterprise level cases through use of data analytics,
                  visualization, and manipulation performed with our software.
                </p>
                <p className='point'>
                  Delivered high level technical support which included on-site
                  training and setting up testing environments to record data
                  which resulted in high client retention.
                </p>
                <p className='point'>
                  Responsible for maintaining testing environments at research
                  facilities, university laboratories, and manufacturing plants
                  in order to collect and analyze data.
                </p>
                <p className='point'>
                  Acted as technical advisor to sales team when meeting with
                  clients.
                </p>
                <p className='point'>
                  Communicated client needs and specifications to engineering
                  team to better produce development path for subsequent
                  projects.
                </p>
                <p className='point'>
                  Handled all aspects of technical writing, including technical
                  documentation, bug reports, and version update logs.
                </p>
              </div>
            </Row>
            {/* Work 5 */}
            <Row className='item'>
              <h3>IPPLUS Patent Office LLP</h3>
            </Row>
            <Row>
              <p className='info'>
                Patent Specialist
                <span> • </span>
                <span>Taipei, Taiwan</span>
                <span> • </span>
                <span>Jan 2013 - Dec 2013</span>
              </p>
              <div className='points'>
                <p className='point'>
                  Utilized AutoCAD and SolidWorks to model intellectual
                  property.
                </p>
                <p className='point'>
                  Collaborated with team of patent engineers to expedite related
                  processes in obtaining a patent, researching prior art, and
                  protecting intellectual property.
                </p>
                <p className='point'>
                  Coordinated final overview and proofread of both Utility and
                  Design patent cases which included translations and technical
                  writing that protected intellectual property.
                </p>
                <p className='point'>
                  Provided clients with high level customer support to help them
                  better understand patent application processes for both United
                  States Patent and Trademark Office and European Patent Office.
                </p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
