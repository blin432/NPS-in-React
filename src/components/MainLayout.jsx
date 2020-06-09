import React , {Component} from 'react';
import SingleCard from './SingleCard.jsx';
import axios from 'axios';


class MainLayout extends Component {
      //   state={
      //     data:{}
      // }

    // componentDidMount(){
    //   axios.get("https://developer.nps.gov/api/v1/parks?limit=50&start=50&q=National%20Park&fields=images,entranceFees,contacts,addresses&sort=-designation&api_key=yflsYenzvnQI9KvZVIiYrgee1zhKUiglWNoaPfa2")
    //     .then( res => {
    //         console.log(res.data)
    //         this.setState({
    //           data:res.data
    //         })
    //     }).catch(err => console.log(err));
        
    // }
    render(){
      return(
         <div className="container" style={{marginTop:'20px',marginBottom:'20px'}}>
              <div className="sticky row justify-content-around">
                  <button type='button' className='btn btn-light'>Filter</button>
                  <div>Parks Selected</div> 
                  <button  type='button' className='btn btn-light'>Reset</button> 
              </div>
              <div className="row">
                    <SingleCard/>
              </div>
        
      </div>

      )
       

    }
    

}
export default MainLayout;
