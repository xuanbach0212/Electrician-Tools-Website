import React, { useState } from 'react'
import Header from './common/header/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Pages from './pages/Pages'
import Data from './components/flashDeals/Data'
import Cart from './common/cart/Cart'
import Sdata from './components/shop/Sdata'
import './App.css'
import Footer from './common/footer/Footer'

function App() {
  const { productItems } = Data
  const { shopItems } = Sdata

  
  const [CartItem, setCartItem] = useState([])


  function addToCart(product){

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit) {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
    }
    else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const decreaseQty = (product) => {

    const productExit = CartItem.find((item) => item.id === product.id)

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    }
    else {
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <Router>
      <Header CartItem={CartItem} />
      <Switch>
        <Route path='/' exact>
          <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
        </Route>
        <Route path='/cart' exact>
          <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App