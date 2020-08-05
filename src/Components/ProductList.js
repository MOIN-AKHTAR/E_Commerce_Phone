import React, { Component } from 'react';
import { Consumer } from './Context';
import Product from './Product';

export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
              <div className="container">
              <div className="row my-5">
                    <div className=" mx-auto text-center">
                        <h1 className="text-title ">Our <span className="text-blue">Products</span></h1>
                    </div>
                </div>
                <div className="row">
                <Consumer>
                    {({storeProducts})=>{
                   return storeProducts.map(product=>(<Product
                    key={product.id} 
                    product={product}
                    />))
                    }}
                </Consumer>
                </div>
              </div>
            </React.Fragment>
        )
    }
}
