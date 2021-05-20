import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import {Route} from "react-router-dom"
import Cart from './section/Cart'
import Payment from './section/Payment'
import EditProduct from './section/EditProducts'
import EditProductData from './section/EditProductData'
import Delivery from './section/Delivery'
import AddProduct from './section/AddProduct'
import UpdateProduct from './section/UpdateProduct'
import PayWithCash from './section/paywithcash'
import Contact from './section/Contact'


export class Section extends Component {
    render() {
        return (
            <section>
                    <Route path="/" component={Products} exact />
                    <Route path="/product" component={Products} exact  />
                    <Route path="/addproduct" component={AddProduct} exact  />
                    <Route path="/product/:id" component={Details} exact />
                    <Route path="/editproduct/:id" component={EditProductData} exact />
                    <Route path="/updateProduct/:id" component={UpdateProduct} exact />
                    <Route path="/cart" component={Cart}  exact/>
                    <Route path="/editProduct" component={EditProduct}  exact/>
                    <Route path="/payment" component={Payment} exact />
                    <Route path="/paywithcash" component={PayWithCash} exact />
                    <Route path="/contact" component={Contact} exact />
                  
                    <Route path="/delivery" component={Delivery} exact />         
            </section>
        )
    }
}

export default Section
