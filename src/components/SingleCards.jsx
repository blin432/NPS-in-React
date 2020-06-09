
import React , {Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loading from './Loading.jsx';
import ParksModal from './ParksModal.jsx';

class SingleCards extends Component {
        state={
          name:this.props.name,
          image:this.props.image,
          description:this.props.description,

      }
      
  
    render(){
      const {name, image, description} = this.state;
      console.log(image)
const [modalShow, setModalShow] = React.useState(false);
      return(
      
        <div>
                <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </Button>
  
        <ParksModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        </Card>

    </div>

      )
      }

}
export default SingleCards;


