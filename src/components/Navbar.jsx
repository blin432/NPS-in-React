import React from "react";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav className="d-flex p-2 justify-content-between" activeKey="/home">
      <div className="navbar-brand pl-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1d/US-NationalParkService-Logo.svg"
          width="26"
          height="34"
          className="d-inline-block align-top"
          alt="national park logo"
        />
        <span className="vert-center">National Park Organizer</span>
      </div>
      <div className="row pr-3">
        <Nav.Item>
        <Nav.Link href="/home">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Github Link</Nav.Link>
      </Nav.Item>
      </div>
      
    </Nav>
  );
}

export default Navbar;
