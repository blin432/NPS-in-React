import React from "react";
import '../App.css'

import Jumbotron from "react-bootstrap/Jumbotron";

function JumboCard() {
  return (
    <Jumbotron id="jumbo-image" style={{ margin: "0px", padding: "0px" }}>
      <img
        id="quote-photo"
        style={{ margin: "0px" }}
        src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bison-herd-into-the-sunset-chris-bordeleau.jpg"
        alt="quote"
      />
      <p id="quote">It was here that the romance of my life began.</p>
    </Jumbotron>
  );
}

export default JumboCard;
