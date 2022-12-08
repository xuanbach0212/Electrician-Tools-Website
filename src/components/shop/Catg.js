import React from 'react'

function Catg() {
    const data = [
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "CADIVI",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Rạng Đông",
        },
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Philip",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Daikin",
        },
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "COMET",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "SINO",
        },
    ]
    return (
        <div className='category'>
            <div className='chead d_flex'>
                <h1>Hãng </h1>
                <h1>Cửa Hàng </h1>
            </div>
            {data.map((value, index) => {
                return (
                    <div className='box f_flex' key={index}>
                        <img src={value.cateImg} alt='' />
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
            <div className='box box2'>
                <button>Xem tất cả các Hãng hiện có</button>
            </div>
        </div>
    )
}

export default Catg