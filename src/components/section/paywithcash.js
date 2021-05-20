import React, { Component } from 'react'
import axios from 'axios'; 

export class Payment extends Component {
   
    render() {
        return (
            <div>
              <div>
                <form > <span id="card-header" style={{fontSize:20}}>Pay With Cash:</span>
    
       
    
        <div className="row-1">
         
          <div className="row row-2"> <input style={{fontSize:20}}  type="text" placeholder="Phone Holder Name" /> </div>
        </div>
        <div className="row three">
          <div className="col-7">
            <div className="row-1">
             
              <div className="row row-2"> <input style={{fontSize:20}}  type="text" placeholder="Phone Number" /> </div>
            </div>
          </div>
          <div className="col-7">
            <div className="row-1">
             
              <div className="row row-2"> <input style={{fontSize:20}}  type="text" placeholder="Pin Number" /> </div>
            </div>
          </div>
          <div className="col-2"> Please Note That The Total Ammount Will Be Charged To The Customer's Monthly Phone Bill</div>
       
        </div> <button className="btn d-flex mx-auto"><b>Proceed To Payment</b></button>
      </form>
            </div>
            </div>
        )
    }
}

export default Payment


