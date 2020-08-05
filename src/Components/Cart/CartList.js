import React from 'react';
import CartItem from './CartItem';
import {Consumer} from '../Context'

export default function CartList() {
    return (
       <div className="container-fluid mt-5">
          <Consumer>
              {({cart,increment,decrement,removeItem})=>{
                  return (cart.map(item=><CartItem 
                  key={item.id}
                  item={item}
                  increment={increment}
                  decrement={decrement}
                  removeItem={removeItem}
                  /> ))
              }}
          </Consumer>
       </div>
    )
}
