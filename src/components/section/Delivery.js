import React, { Component } from 'react'
import axios from 'axios'; 
import { Redirect } from "react-router-dom";
import {Route} from "react-router-dom"
import {Link} from 'react-router-dom';
export class Payment extends Component {
  state = { redirect: null };

  constructor(props) {
    super(props);
    this.OnChnageAddress = this.OnChnageAddress.bind(this);
    this.OnChnageProvince = this.OnChnageProvince.bind(this);
    this.OnChangeCity = this.OnChangeCity.bind(this);
    this.OnChnagePostalCode = this.OnChnagePostalCode.bind(this);
    this.OnChangeCountry = this.OnChangeCountry.bind(this);
    this.OnChangeName = this.OnChangeName.bind(this);
    this.OnChangePhone = this.OnChangePhone.bind(this);
    this.OnChaneEmail = this.OnChaneEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        address: '',
        province: '',
        city: '',
        postalCode: '',
        country:'',
        contactName:'',
        ContactPhone :'',
        Email:''
    }
}
OnChnageAddress(e) {
    this.setState({
      address: e.target.value
    });
} 
OnChnageProvince(e) {
    this.setState({
      province: e.target.value
      });
  } 
OnChangeCity(e) {
    this.setState({
      city: e.target.value
    });
} 
OnChnagePostalCode(e) {
    this.setState({
      postalCode: e.target.value
    });
} 
OnChangeCountry(e) {
    this.setState({
      country: e.target.value
    });
} 
OnChangeName(e) {
    this.setState({
      contactName: e.target.value
    });
} 
OnChangePhone(e) {
  this.setState({
    ContactPhone: e.target.value
  });
}
OnChaneEmail(e) {
  this.setState({
    Email: e.target.value
  });
}
onSubmit(e) {
    e.preventDefault();
    
    
    console.log(`Form submitted:`);

   
    axios.post('http://localhost:4000/todos/Addshipment', {
    "origin_address": {
        "line_1": this.state.address,
        "line_2":"  ",
        "state":this.state.province,
        "city":this.state.city,
        "postal_code": this.state.postalCode,
        "country_alpha2":this.state.country,
        "contact_name": this.state.contactName,
        "company_name": "Not Stated",
        "contact_phone":this.state.ContactPhone,
        "contact_email": this.state.Email
    },
    "sender_address": {
        "line_1": "55 Prospect St",
        "line_2": "Unit 401",
        "state": "NY",
        "city": "Sydney",
        "postal_code": "11201",
        "country_alpha2": "US",
        "contact_name": "Mandy Morrison",
        "company_name": "Mandy's Watches",
        "contact_phone": "+1396380000",
        "contact_email": "mandy@morrison.com"
    },
    "return_address": {
        "line_1": "55 Prospect St",
        "line_2": "Unit 401",
        "state": "NY",
        "city": "Sydney",
        "postal_code": "11201",
        "country_alpha2": "US",
        "contact_name":this.state.contactName,
        "company_name": "Mandy's Watches",
        "contact_phone": "+1396380000",
        "contact_email": "mandy@morrison.com"
    },
    "destination_address": {
        "line_1":this.state.address,
        "line_2": " ",
        "state": this.state.province,
        "city": this.state.city,
        "postal_code": this.state.postalCode,
        "country_alpha2": "LK",
        "contact_name": this.state.contactName,
        "company_name": null,
        "contact_phone": this.state.ContactPhone,
        "contact_email": this.state.Email
    },
    "metadata": {},
    "set_as_residential": false,
    "consignee_tax_id": null,
    "eei_reference": null,
    "incoterms": "DDU",
    "insurance": {
        "is_insured": false,
        "insured_amount": 10,
        "insured_currency": "USD"
    },
    "order_data": {
        "platform_name": null,
        "platform_order_number": null,
        "order_tag_list": [
            "VIP"
        ],
        "seller_notes": null,
        "buyer_notes": null
    },
    "courier_selection": {
        "selected_courier_id": null,
        "allow_courier_fallback": false,
        "apply_shipping_rules": true
    },
    "shipping_settings": {
        "units": {
            "weight": "lb",
            "dimensions": "in"
        },
        "printing_options": {
            "format": "pdf",
            "label": "4x6",
            "commercial_invoice": "A4",
            "packing_slip": "none"
        },
        "buy_label": false,
        "buy_label_synchronous": false
    },
    "parcels": [
        {
            "total_actual_weight": 0.8,
            "box": {
                "slug": null,
                "length": 10,
                "width": 8,
                "height": 5
            },
            "items": [
                {
                    "description": "Silk dress",
                    "category": "fashion",
                    "sku": "test01",
                    "quantity": 2,
                    "dimensions": {
                        "length": null,
                        "width": null,
                        "height": null
                    },
                    "actual_weight": 10,
                    "declared_currency": "USD",
                    "declared_customs_value": 20
                }
            ]
        }
    ]
    
    
})

this.setState({ redirect: "/payment" });
        
}
render() {
  if(this.state.redirect){
    return <Redirect to={this.state.redirect} />
  }else{
    return (
      <div style={{marginTop: 10}}>
      <h3>Blling Details</h3>
      <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
              <label>Address: </label>
              <input  
                      type="text"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.OnChnageAddress}
                      />
          </div>
          <div className="form-group">
              <label>Province: </label>
              <input 
                      type="text" 
                      className="form-control"
                      value={this.state.province}
                      onChange={this.OnChnageProvince}
                      />
          </div>
          
          <div className="form-group">
              <label>City: </label>
              <input 
                      type="text" 
                      className="form-control"
                      value={this.state.city}
                      onChange={this.OnChangeCity}
                      />
          </div>
          <div className="form-group">
              <label>Postal Code: </label>
              <input 
                      type="text" 
                      className="form-control"
                      value={this.state.postalCode}
                      onChange={this.OnChnagePostalCode}
                      />
          </div>
          <div className="form-group">
              <label>Country: </label>
              <input 
                      type="text" 
                      className="form-control"
                      value={this.state.country}
                      onChange={this.OnChangeCountry}
                      />
          </div>
          <div className="form-group">
              <label>Contact Name : </label>
              <input 
                      type="text" 
                      className="form-control"
                      value={this.state.contactName}
                      onChange={this.OnChangeName}
                      />
          </div>
          <div className="form-group">
              <label>Contact Phone : </label>
              <input 
                      type="text" 
                      className="form-control"
                      value={this.state.ContactPhone}
                      onChange={this.OnChangePhone}
                      />
          </div>
          <div className="form-group">
              <label>Contact Email : </label>
              <input 
                      type="text" 
                      className="form-control"
                      value={this.state.Email}
                      onChange={this.OnChaneEmail}
                      />
          </div>
          <div className="total">
          
         <button type="submit" className="btn btn-primary">Proceed To Checkout</button>
         
  
                  </div>
      </form>
  </div>
  )
}

  }
   
}

export default Payment
