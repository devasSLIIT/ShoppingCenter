import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import axios from 'axios';  


export class EditProData extends Component {
    static contextType = DataContext;
   

   

    state = {
        product: [],
        temp :[],
        idX:0
        
    }

  

    getProduct = () =>{
        if(this.props.match.params.id){
            axios.get('http://localhost:4000/todos/')
            .then(response => {
                const res = response.data;
                const data = res.filter(item =>{
                    
                    return item._id === this.props.match.params.id
                })
               
                this.setState({
                    product: data})
            })
            .catch(function (error){
                console.log(error);
            })    
        }
    };
    componentDidMount() {
        this.getProduct();
    }

 
    onSubmit(e) {
        e.preventDefault();
        
        
    console.log(this.idX)
        axios.post('http://localhost:4000/todos/add',this.state.idX)
            .then(res => console.log(res.data));    
    }


    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                          
                          <img src={item.src} alt=""/>
                            <div className="box">
                                <div className="row">
                                <center> <b>  <h2 style={{fontSize:40,marginLeft:-100}}> {item.title}</h2></b></center> 
                                   
                                </div>
                               
                                <table style={{fontSize:30}}>
                                <tr>
                                        <td style={{fontSize:30}}>Item Price   </td>

                                        <td style={{fontSize:30}}>${item.price}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Item Description    .   </td>

                                        <td>{item.description}</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Item Content</td>
                                        <td>{item.content}</td>
                                    </tr>
                                   
                                </table>
                             
                                <br></br>
                                <Link to={`/updateProduct/${item._id}`} className="cart"> Update Product</Link>
                                <form onSubmit={this.onSubmit}>
                                <button className="cart"  onClick=""  >Delete Product</button>

                                </form>

                              
                               
                               
                                  
                               
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default EditProData
