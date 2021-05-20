import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Colors from './Colors'
import '../css/Details.css'
import axios from 'axios';  


export class UpdateProduct extends Component {

    
   
     
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    } 
    onChangesrc(e) {
        this.setState({
            src: e.target.value
        });
    } 
    onChangedescription(e) {
        this.setState({
            description: e.target.value
        });
    } 
    onChangecontent(e) {
        this.setState({
            content: e.target.value
        });
    } 
    onChangeprice(e) {
        this.setState({
            price: e.target.value
        });
    } 
    onChangeCount(e) {
        this.setState({
            count: e.target.value
        });
    } 
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
    
        const Product = {
            title: this.state.title,
            src: this.state.src,
            description: this.state.description,
            content: this.state.content,
            price:this.state.price,
            count:this.state.count,
        };

        axios.post('http://localhost:4000/todos/update'+this.props.match.params.id, Product)
            .then(res => console.log(res.data));
    }


    
    static contextType = DataContext;
    state = {
        product: [],
        temp :[]
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
    

    


    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <>
                {
                    product.map(item =>(
                        <div style={{marginTop: 10}}>
            <h3>Add Product</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Title: </label>
                    <input  
                            type="text"
                            className="form-control"
                            value={item.title}
                            onChange={this.onChangeTitle}
                            />
                </div>
                <div className="form-group">
                    <label>Image Source: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={item.src}
                            onChange={this.onChangesrc}
                            />
                </div>
                
                <div className="form-group">
                    <label>Description: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={item.description}
                            onChange={this.onChangedescription}
                            />
                </div>
                <div className="form-group">
                    <label>Content: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={item.content}
                            onChange={this.onChangecontent}
                            />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={item.price}
                            onChange={this.onChangeprice}
                            />
                </div>
                <div className="form-group">
                    <label>Count: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={item.count}
                            onChange={this.onChangeCount}
                            />
                </div>

                <div className="form-group">
                    <input type="submit" value="Update Product" className="btn btn-primary" />
                </div>
            </form>
        </div>
                    ))
                }
            </>
        )
    }
}

export default UpdateProduct
