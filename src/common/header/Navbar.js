import React, {useState} from 'react'
import {Link} from "react-router-dom"
import './Header.css'

function Navbar() {
const [MobileMenu,setMobileMenu] = useState(false)
  return (
         <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex'>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Danh mục sản phẩm <i className='fa fa-chevron-down'></i>
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'/>
              <li>
                <Link to='/'>Trang Chủ</Link>
              </li>
              <li>
                <Link to='/pages'>Giới Thiệu</Link>
              </li>
              <li>
                <Link to='/user'>Sản Phẩm</Link>
              </li>
              <li>
                <Link to='/vendor'>Bảng Giá</Link>
              </li>
              <li>
                <Link to='/track'>Tin Tức</Link>
              </li>
              <li>
                <Link to='/contact'>Liên Hệ</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
  )
}

export default Navbar