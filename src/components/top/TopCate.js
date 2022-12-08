import React from 'react'
import './topStyle.css'
import TopCart from './TopCart'

function TopCate() {
    return (
        <section className='TopCate background'>
            <div className='container'>
                <div className='heading d_flex'>
                    <div className='heading-left row  f_flex'>
                        <i className='fa-solid fa-border-all'></i>
                        <h2>Bán Chạy Nhất</h2>
                    </div>
                    <div className='heading-right row '>
                        <span>Xem Thêm</span>
                        <i className='fa-solid fa-caret-right'></i>
                    </div>
                </div>
                <TopCart />
            </div>
        </section>
    )
}

export default TopCate