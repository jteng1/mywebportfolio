import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand='sm'
        sticky='top'
        className='customNavbar'
      >
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#portfolio'>Projects</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#work'>Work</Nav.Link>
            <Nav.Link href='#education'>Education</Nav.Link>
            <Nav.Link href='#skills'>Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
