import React, { Component } from 'react';
import {Consumer} from './Context';
import {Button} from '../UI/Button'
import { Link } from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <Consumer>
                {
                    ({detailProduct:{id,company,img,inCart,info,price,title},addToCart})=>(
                        <div className="container">
                            <div className="row my-5">
                               <div className="col-10 m-auto text-center text-blue">
                                 <h1>{title}</h1>
                               </div>
                            </div>
                            <div className="row">
                               <div className="col-10 mx-auto col-md-6">
                                 <img src={img} alt="No Image" className="img-fluid" aria-hidden/>
                               </div>
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                 <h2>{title}</h2>
                                 <h4 className="text-title text-muted text-uppercase text-muted mt-3 mb-2">Made By {company}</h4>
                                 <h4 className="text-blue">
                                     <strong>Price : <span>$</span>{price}</strong>
                                 </h4>
                                 <p className="font-weight-bold text-uppercase my-2">Some Info About Product</p>
                                 <p className="text-muted lead">
                                     {info}
                                 </p>
                                 <div>
                                     <Button>
                                       <Link to="/" style={{textDecoration:"none"}}>
                                         Back To Products
                                       </Link>
                                     </Button>
                                     <Button
                                     disabled={inCart?true:false}
                                     onClick={()=>addToCart(id)}
                                     cart
                                     >
                                    {inCart?"inCart":"add to cart"}
                                     </Button>
                                 </div>
                               </div>
                            </div>
                        </div>
                    )
                }
            </Consumer>
        )
    }
}
