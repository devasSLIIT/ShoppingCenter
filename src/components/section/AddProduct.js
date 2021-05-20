import React, { Component } from 'react'
import axios from 'axios'; 
export class Payment extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangesrc = this.onChangesrc.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onChangecontent = this.onChangecontent.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangeCount = this.onChangeCount.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            src: '',
            description: '',
            content: '',
            price:'',
            count:''
        }
    }
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

        axios.post('http://localhost:4000/todos/add', Product)
            .then(res => console.log(res.data));

        this.setState({
            title: '',
            src: '',
            description: '',
            content: '',
            price:'',
            count:''
        })
    }
    render() {
        return (
            
        
            <div style={{marginTop: 10}}>
                
            <h3>Add Product</h3>
            <form onSubmit={this.onSubmit}>
                <div className="mb-3"> 
                    <label>Title: </label>
                    <input  
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            />
                </div>
                <div className="form-group">
                    <label>Image Source: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.src}
                            onChange={this.onChangesrc}
                            />
                </div>
                
                <div className="form-group">
                    <label>Description: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangedescription}
                            />
                </div>
                <div className="form-group">
                    <label>Content: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.content}
                            onChange={this.onChangecontent}
                            />
                </div>
                <div className="form-group">
                    <label>Price: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeprice}
                            />
                </div>
                <div className="form-group">
                    <label>Count: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.count}
                            onChange={this.onChangeCount}
                            />
                </div>

                <div className="form-group">
                    <input type="submit" value="Add Product" className="btn btn-primary" />
                </div>
            </form>

            
        </div>
        )
    }
}

export default Payment
