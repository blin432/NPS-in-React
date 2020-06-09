import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';


function JumboCard() {
  return (
   
  <Jumbotron style={{margin:'0px', padding:'0px'}}>
  <img id="quote-photo" style={{margin:'0px'}} src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/bison-herd-into-the-sunset-chris-bordeleau.jpg" alt="quote-image"/>
  <p id="quote">It was here that the romance of my life began.</p>
</Jumbotron>
  

  );
}

export default JumboCard;