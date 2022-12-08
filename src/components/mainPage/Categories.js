import React from 'react'

function Categories() {
    const data = [
        {
            cateImg: "./images/category/eletric-cord.png",
            cateName: "CADIVI",
        },
        {
            cateImg: "./images/category/pipe.png",
            cateName: "MAI TIẾN PHÁT",
        },
        {
            cateImg: "./images/category/led.png",
            cateName: "RẠNG ĐÔNG",
        },
        {
            cateImg: "./images/category/led-light.png",
            cateName: "PHILIP",
        },
        {
            cateImg: "./images/category/electrical-conduits.png",
            cateName: "VEGA",
        },
        {
            cateImg: "./images/category/plastic-pipe.png",
            cateName: "NHỰA BÌNH MINH",
        },
        {
            cateImg: "./images/category/air-conditioner.png",
            cateName: "DAIKIN",
        },
        {
            cateImg: "./images/category/electrical-appliance.png",
            cateName: "COMET",
        },
        {
            cateImg: "./images/category/connect-pipe.png",
            cateName: "TIỀN PHONG",
        },
        {
            cateImg: "./images/category/led-roman.png",
            cateName: "ROMAN",
        },
        {
            cateImg: "./images/category/wall-socket.png",
            cateName: "SINO",
        },
    ]

    return (
        <div className='category'>
            {data.map((value, index) => {
                return (
                    
                    <div className='box f_flex' key={index}>
                        <img src={value.cateImg} alt='' />
                        <span>{value.cateName}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Categories