
import React , {Component} from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Loading from './Loading.jsx';
import SingleCards from './SingleCards.jsx'

class SingleCard extends Component {
        state={
          data:{}
      }

    componentDidMount(){
      axios.get("https://developer.nps.gov/api/v1/parks?limit=50&start=50&q=National%20Park&fields=images,entranceFees,contacts,addresses&sort=-designation&api_key=yflsYenzvnQI9KvZVIiYrgee1zhKUiglWNoaPfa2")
        .then( res => {
         this.setState({data:res.data.data})
        }).catch(err => console.log(err));
        
    }
    render(){
      const {data} = this.state;
      console.log(data)
     if (data ===undefined || Object.keys(data).length ===0 ){
        return <Loading/>
    }else{
      return(
        data.map( parks =><SingleCards name={parks.name} image={parks.images[0].url} description={parks.description} />)
      )
      }

    }
    

}
export default SingleCard;
