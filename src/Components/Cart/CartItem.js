import React from 'react'

export default function CartItem({item,increment,decrement,removeItem}) {
    const {id,img,title,price,count,total}=item;
    return (
        <div className="row my-2 text-capitalize text-center d-flex align-items-center justify-content-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={img} 
                alt="No Image"
                 className="img-fluid"
                 style={{width:"5rem",height:"5rem"}}
                 aria-hidden
                 />
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">Product:</span>{title}
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <span className="d-lg-none">Price:</span>{price}
            </div>
            <div className="col-10 mx-auto col-lg-2">
               <div className="d-flex justify-content-center align-items-center">
               <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>-</span>
               <span className="btn btn-black mx-1">{count}</span>
               <span className="btn btn-black mx-1" onClick={()=>increment(id)}>+</span>
               </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
            <i 
            className="fa fa-trash-o"
            aria-hidden
            onClick={()=>removeItem(id)}
             ></i>
            </div>
            <div className="col-10 mx-auto col-lg-2 mb-3">
               <strong>Item Total:${total}</strong>
            </div>
        </div>
    )
}
// title