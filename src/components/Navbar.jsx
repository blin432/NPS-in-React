import React from 'react';

import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    
     <Nav  activeKey="/home">
          <a className="navbar-brand">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg" width="26" height="34" className="d-inline-block align-top" alt=""/>
            <span className="vert-center">National Park Organizer</span>
          </a>
        <Nav.Item>
          <Nav.Link href="/home">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Github Link</Nav.Link>
        </Nav.Item>
        
     
  </Nav>
  
  );
}

export default Navbar;
