import React from 'react'
import './Header.css'


function Head() {
    return (
        <div>
            <section className='head'>
                <div className='container d_flex'>
                    <div className='left row'>
                        <i className='fa fa-phone'></i>
                        <label>+84363237047</label>
                        <i className='fa fa-envelope'></i>
                        <label>xuanbachdao0212@gmail.com</label>
                    </div>
                    <div className='right row RText'>
                        <label>FAQ"s</label>
                        <label>Bạn cần trợ giúp?</label>
                        <span>🇻🇳 </span>
                        <label>VN</label>
                        <span>🇻🇳 </span>
                        <label>VNĐ</label>
                    </div>
                </div> 
            </section>
        </div>
    )
}

export default Head