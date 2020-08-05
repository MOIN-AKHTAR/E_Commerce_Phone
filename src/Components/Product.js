import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Style from 'styled-components';
import {Consumer} from './Context'

export default class Product extends Component {    
    render() {
        const {product:{id,img,price,inCart,title}}=this.props
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3 text-center">
               <div className="card">
                 <div className="img-container p-5">
                     <Consumer>
                      {({handleDetail,addToCart})=>(
                   <React.Fragment>
                   <Link to="/details" onClick={()=>handleDetail(id)}>
                         <img src={img} alt="Prodcut Image" aria-hidden className="card-img-top"/>
                    </Link>
                    <button 
                    className="cart-btn"
                    disabled={inCart?true:false}
                    onClick={()=>addToCart(id)}
                    >
                    {
                    inCart?<p className="mb-0 text-capitalize" disabled>In Cart</p>:<i className="fa fa-cart-plus" aria-hidden></i>
                    }
                    </button>
                   </React.Fragment>
                    )}
                    </Consumer>
                 </div>
                 <div className="card-footer d-flex justify-content-between ">
                     <p className="self-align-center mb-0">{title}</p>
                     <h5 className="mb-0"><span>$</span>{price}</h5>
                 </div>
               </div>
            </ProductWrapper>
        )
    }
}


const ProductWrapper=Style.div`
.card{
    overflow:hidden;
    border:none;
}
.card:hover{
    border:1px solid var(--mainWhite);
    box-shadow:2px 2px 5px 0 rgba(0,0,0,0.2);
  .cart-btn{
    transform:translate(0%,0%);
  }
  .card-footer{
    background:var(--mainWhite);
}
}
.img-container{
    position:relative;
}
.card-img-top{
    transition:all 0.5s linear;
}
.card-img-top:hover{
    transform:scale(1.2);
}
.cart-btn{
    position:absolute;
    bottom:0px;
    right:0px;
    padding:0.2rem 0.5rem;
    border:none;
    font-size:1.4rem;
    background:var(--lightBlue);
    color:var(--mainWhite);
    transform:translate(110%,100%);
    transition:all 0.5s ease-in-out;
    font-style:italic;
    cursor:pointer;
    border-radius:0.5rem 0px 0px 0px;
}
.cart-btn:hover{
    background:var(--mainBlue);
}
.cart-btn:focus{
outline:none;
}
.card-footer{
    background:transparent;
}
`