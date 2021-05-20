import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Products.css'
import axios from 'axios';  

const Todo = props => (


    <div className="card"style={{height:"50rem"}}  key={props.todo._id} >
    <Link to={`/editproduct/${props.todo._id}`}>
        <img src={props.todo.src} alt=""/>
    </Link>
    <div className="content" >
        <h3>
            <Link to={`/editproduct/${props.todo._id}`}>{props.todo.title}</Link>
        </h3>
        <span>${props.todo.price}</span>
        <p>{props.todo.description}</p>
        <button>Click To Edit Product</button>
        
    </div>
</div>

  

)

export class Products extends Component {

    constructor(props) {
        super(props);
        this.state = {todos:[]};
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                
                const pro=[];
              this.setState({ todos: response.data });
               console.log(this.state)
            })
            .catch(function (error){
                console.log(error);
            })
    }
    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }


    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div id="product" >
                { this.todoList() }
            </div>
        )
    }
}

export default Products
