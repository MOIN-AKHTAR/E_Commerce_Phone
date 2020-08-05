import React from 'react';
import {Consumer} from './Context';
import Style from 'styled-components';
import {Button} from '../UI/Button';
import {Link} from 'react-router-dom'

export default function Modal() {
    return(
        <Consumer>
            {({openModal,modalItem,closeModal})=>{
                const {title,price,img}=modalItem
                  if(!openModal){
                      return null;
                  }else{
                      return(
                          <CustomModal>
                          <div className="container">
                              <div className="row">
                                  <div className="col-8 mx-auto col-md-6 text-center p-5" id="modal">
                                      <h1>Item Added To Cart</h1>
                                      <img src={img} 
                                      alt="Product Image"
                                      className="img-fluid"
                                      aria-hidden
                                       />
                                      <h3>{title}</h3>
                                      <h4 className="text-muted">Price : $ {price}</h4>
                                      <Link to="/">
                                        <Button
                                        onClick={()=>closeModal()}
                                        >Continue Shopping</Button>
                                      </Link>
                                      <Link to="/cart">
                                        <Button 
                                        onClick={()=>closeModal()}
                                        cart>Go To Cart</Button>
                                      </Link>
                                  </div>
                              </div>
                          </div>
                        </CustomModal>
                      )
                  }
            }}
        </Consumer>
    )
}


const CustomModal=Style.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display:flex;
justify-content:center;
align-items:center;
background:rgba(0,0,0,0.8);
#modal{
    background:var(--mainWhite);
}
`
