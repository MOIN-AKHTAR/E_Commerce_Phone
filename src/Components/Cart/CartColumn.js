import React from 'react'

export default function CartColumn() {
    return (
       <div className="container-fluid d-none d-lg-block  my-2 text-center">
           <div className="row">
               <div className="col-10 mx-auto col-lg-2">
                   PRODUCTS
               </div>
               <div className="col-10 mx-auto col-lg-2">
                   NAME OF PRODUCT
               </div>
               <div className="col-10 mx-auto col-lg-2">
                   PRICE
               </div>
               <div className="col-10 mx-auto col-lg-2">
                   QTY
               </div>
               <div className="col-10 mx-auto col-lg-2">
                   REMOVE
               </div>
               <div className="col-10 mx-auto col-lg-2">
                   TOTAL
               </div>
           </div>
       </div>
    )
}
