import React from 'react'
import { Link } from 'react-router-dom'

export default function CartTotal({clearCart,cartSubTotal,cartTax,cartTotal,payAmount}) {
    return (
       <div className="container">
           <div className="row">
               <div className="col-10 mt-2 ml-sm-5 ml-md-auto text-right">
               <button type="button"
                className="btn btn-outline-danger text-uppercase px-5 py-2 mb-2"
                onClick={clearCart}
                >Clear Cart</button>
               <h5>
                   <span className="text-title">Subtotal :</span>
                   <span>${cartSubTotal}</span>
               </h5>
               <h5>
                   <span className="text-title">Tax :</span>
                   <span>${cartTax}</span>
               </h5>
               <h5>
                   <span className="text-title">Total :</span>
                   <span>${cartTotal}</span>
               </h5>
              <Link to="/">
              <button className="btn  btn-outline-primary px-5" onClick={()=>payAmount()}>Pay Amount</button>
              </Link>
               </div>
           </div>
       </div>
    )
}
