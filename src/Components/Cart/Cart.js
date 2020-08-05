import React, { Component } from 'react';
import CartColumn from './CartColumn';
import {Consumer} from '../Context'
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component {
    render() {
        return (
            <Consumer>
                {({cart,clearCart,cartSubTotal,cartTax,cartTotal,payAmount})=>{
                  if(cart.length>0){
                      return(
                <React.Fragment>
                       <h1 className="text-title text-center my-2">
                        Your <span className="text-blue">Cart</span></h1>
                          <CartColumn/>
                          <CartList/>
                          <CartTotal 
                          clearCart={clearCart}
                          cartSubTotal={cartSubTotal}
                          cartTax={cartTax}
                          cartTotal={cartTotal}
                          payAmount={payAmount}
                          history={this.props.history}
                          />
                </React.Fragment>
                      )
                  }else{
                      return <EmptyCart/>
                  }
                }}
            </Consumer>
        )
    }
}
