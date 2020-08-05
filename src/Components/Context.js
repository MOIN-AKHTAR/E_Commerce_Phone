import React, { Component } from 'react';
import {detailProduct,storeProducts} from '../data';

const myContext=React.createContext();
const Provider=myContext.Provider;
const Consumer=myContext.Consumer;
 class Context extends Component {
    state={
        storeProducts:[],
        detailProduct:detailProduct,
        cart:[],
        openModal:false,
        modalItem:detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0
    }
    
    // Setting detailProduct According To Selected Product-
    getItem=id=>this.state.storeProducts.find(Item=>Item.id===Number(id));
    handleDetail=(id)=>{
        let Item=this.getItem(id);
        this.setState({
            detailProduct:Item
        })
    }

    // ADD TO CART METHOD
    addToCart=(id)=>{
       let products=[...this.state.storeProducts];
       let product=products.find(product=>product.id===Number(id));
       product.inCart=true;
       product.count=1;
       product.total=product.price;
       this.setState(()=>{
           return {
            storeProducts:products,
            cart:[...this.state.cart,product],
            openModal:true,
            modalItem:product
           }
       },()=>{
           this.addTotal()
       })
    }


    // This Method Will Copy storeProducts Values As It Is An Array Of Object
    // So Inorder To Get Copy Of Each Objevt Inside storeProducts Array We Manually Have
    // To Copy Each Object By Iterating Over Them
    setProducts=()=>{
        let newProducts=[];
        storeProducts.forEach(object => {
            newProducts=[...newProducts,{...object}];
     });
     this.setState({
        storeProducts:newProducts
     })
}

closeModal=()=>{
    this.setState({
        openModal:false
    })
}

addTotal=()=>{
    let subtotal=0;
    this.state.cart.map(Item=>subtotal+=Item.total);
    const tax=Number((subtotal*0.1).toFixed(2));
    const total=subtotal+tax;
    this.setState({
        cartSubTotal:subtotal,
        cartTax:tax,
        cartTotal:total
    })
}

increment=id=>{
  let cartCopy=[...this.state.cart];
  let product=cartCopy.find(Item=>Item.id===Number(id));
  product.count+=1;
  product.total+=product.price;
  this.setState(()=>{
      return{
          cart:cartCopy
      }
  },()=>{
      this.addTotal()
  })
}
decrement=id=>{
    let cartCopy=[...this.state.cart];
    let product=cartCopy.find(Item=>Item.id===Number(id));
    product.count-=1;
    product.total-=product.price;
    if(product.count===0){
        let newCart=this.state.cart.filter(Item=>Item.id!==Number(id));
        this.setState(()=>{
            return{
                cart:newCart
            }
        },()=>{
            this.addTotal()
        })
    }else{
        this.setState(()=>{
            return{
                cart:cartCopy
            }
        },()=>{
            this.addTotal()
        })
    }
   
}

clearCart=_=>{
    this.setState({
        cart:[]
    },()=>{
        this.setProducts();
    })
}

removeItem=(id)=>{
    let newCart=this.state.cart.filter(Item=>Item.id!==Number(id));
        this.setState(()=>{
            return{
                cart:newCart
            }
        },()=>{
            this.addTotal()
        })
}


  payAmount=()=>{
      this.setState(()=>{
          return{
            cart:[],
            cartSubTotal:0,
            cartTax:0,
            cartTotal:0
          }
      },()=>{
          this.setProducts()
      })
  }

componentDidMount(){
    this.setProducts();
}

    render() {
        return (
            <Provider
            value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                clearCart:this.clearCart,
                removeItem:this.removeItem,
                payAmount:this.payAmount
            }}
            >
            {this.props.children}
            </Provider>
        )
    }
}
export { Context,Consumer }