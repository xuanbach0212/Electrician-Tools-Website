import React from 'react'
import Head from './Head'
import Search from './Search'
import Navbar from './Navbar'

function Header({CartItem}) {
  return (
    <div>
        <Head/>
        <Search CartItem={CartItem}/>
        <Navbar/>
    </div>
  )
}

export default Header