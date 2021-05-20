import React, { Component } from 'react'
import axios from 'axios'; 

export class Payment extends Component {
    componentDidMount(){
        window.location.href = "http://localhost:4000/makepayment";
     }
    render() {
        return (
            <div>
              
            </div>
        )
    }
}

export default Payment
