import React from 'react'
import Annocument from '../components/annocuments/Annocument'
import Discount from '../components/discount/Discount'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainPage/Home' 
import NewArrivals from '../components/newArrivals/NewArrivals'
import Shop from '../components/shop/Shop'
import TopCate from '../components/top/TopCate'
import Wrapper from '../components/wrapper/Wrapper'

function Pages({ productItems,CartItem,addToCart,shopItems }) {
  return (
    <div>
      <Home CartItem={CartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate/>
      <NewArrivals/>
      <Discount/>
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Annocument/>
      <Wrapper/>
    </div>
  )
}

export default Pages