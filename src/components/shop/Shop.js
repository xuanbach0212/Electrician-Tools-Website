import React from 'react'
import './Style.css'
import Catg from './Catg'
import ShopCart from './ShopCart'

function Shop({ shopItems, addToCart }) {
    return (
        <section className='shop background'>
            <div className='container d_flex'>
                <Catg />

                <div className='contentWidth'>
                    <div className='heading d_flex'>
                        <div className='heading-left row  f_flex'>
                            <h2>Sản Phẩm Khác</h2>
                        </div>
                        <div className='heading-right row '>
                            <span className="shopspan">Xem Thêm</span>
                            <i className='fa-solid fa-caret-right'></i>
                        </div>
                    </div>
                    <div className='product-content  grid1'>
                        <ShopCart shopItems={shopItems} addToCart={addToCart} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop