import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ParksModal from "./ParksModal.jsx";


class SingleCards extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      name: this.props.name,
      image: this.props.image,
      description: this.props.description,
      show: false,
      parksData:this.props.parksData
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    console.log("click");
  }

  render() {
    const { name, image, description, parksData } = this.state;

    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" onClick={this.handleShow}>See More</Button>
          </Card.Body>
          <ParksModal parksData={parksData} show={this.state.show} handleClose={this.handleClose} />
        </Card>
      </div>
    );
  }
}
export default SingleCards;
