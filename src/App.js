import React from 'react';
import Navbar from './Components/Navbar'
import Details from './Components/Details'
import Cart from './Components/Cart';
import ProductList from './Components/ProductList';
import Modal from './Components/Modal'
import NotFound from './Components/NotFound';
import {Route,Switch} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <React.Fragment>
       
       <Navbar/>
       <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/cart" component={Cart}/>
          <Route path="*" component={NotFound}/>
       </Switch>  
       <Modal/>
   </React.Fragment>
  );
}

export default App;
