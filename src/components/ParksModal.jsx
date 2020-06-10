import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import '../NewApp.css'

class ParksModal extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      parksData:this.props.parksData
    };
  }

  render() {
    const { parksData } = this.state;
    console.log(parksData)
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {parksData.name}-{parksData.states}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-paragraph">
          <img
            src={parksData.images[0].url}
            alt="park picture"
            style={{ height: "300px", width: "100%" }}
          ></img>
          <p className="mb-0">
            <b>Description:</b>
          </p>
          <p className="mb-3">{parksData.description}</p>
          <p className="mb-0">
            <b>Entrance Fee:</b>
          </p>
          <p className="mb-3">{parksData.entranceFees[0].cost}</p>
          <p className="mb-0">
            <b>Park Office Address:</b>
          </p>
          <p>{parksData.addresses[0].line1}</p>
          <p className="mb-3">
            {parksData.addresses[0].city}
            {parksData.addresses[0].stateCode}
            {parksData.addresses[0].postalCode}
          </p>
          <p>
            <b className="mb-0">Phone Number:</b>
          </p>
          <p className="mb-3">
            {parksData.contacts.phoneNumbers[0].phoneNumber}
          </p>
          <p className="mb-0">
            <b>Email Address:</b>
          </p>
          <p>{parksData.contacts.emailAddresses[0].emailAddress}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ParksModal;
