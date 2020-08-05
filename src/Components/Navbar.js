import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {Button} from '../UI/Button';
import Styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
           <NavWrapper className="navbar navbar-expand-lg navbar-dark bg-primary px-sm-5">
                   <Link to="/">
                         <img src={logo} alt="No Image" aria-hidden className="navbar-brand"/>
                   </Link>
                   <ul className="navbar-nav align-items-center" >
                      <li className="nav-item ml-sm-5" >
                          <Link className="nav-link" to="/">products</Link>
                      </li>
                   </ul>
                   <Link to="/cart" className="ml-auto">
                      <Button>
                          <span className="mr-2">
                              <i className="fa fa-cart-plus" aria-hidden="true"></i>
                          </span>
                           my cart
                      </Button>
                   </Link>
           </NavWrapper>
        ) 
    }
}
const NavWrapper=Styled.nav`
background: var(--mainBlue) !important;
.nav-link{
    color:var(--mainWhite);
    font-size:1.4rem;
    text-transform:capitalize;
}
`

