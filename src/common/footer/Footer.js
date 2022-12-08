import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>Tuấn Dũng</h1>
            <p>Công Ty Cổ Phần Đầu Tư Tuấn Dũng Tiền thân là Công Ty TNHH Tuấn Dũng được thành lập từ đầu những năm 2010. Với trên 10 năm xây dựng và phát triển, được sự tin tưởng của nhà sản xuất và nhận được sự hợp tác của Quý Khách Hàng. Các công trình xây dựng do Công Ty cung cấp thiết bị ngành M&E trải dài khắp ba miền BẮC – TRUNG – NAM.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span className='footer_img'>Google Play</span>
              </div>
              <div className='img d_flex ' >
                <i class='fa-brands fa-app-store-ios'></i>
                <span className='footer_img'>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Về Chúng Tôi</h2>
            <ul>
              <li>Phát Triển</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Chăm sóc khách hàng</h2>
            <ul>
              <li>Trung tâm chăm sóc Khách Hàng </li>
              <li>Cách mua Sản Phẩm </li>
              <li>Kiểm tra Hóa Đơn </li>
              <li>Trả góp </li>
              <li>Hoàn Trả </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Liên Hệ với Chúng Tôi</h2>
            <ul>
              <li>183/9/47/c4, Lưu Chí Hiếu </li>
              <li>Email: xuanbachdao0212@gmail.com</li>
              <li>Phone: +84 36 323 7047</li>
            </ul>
          </div>
        </div>
      </footer>
  )
}

export default Footer