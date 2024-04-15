import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <nav className="footer-nav">
        <ul>
          <li><a href="/">Upscaler</a></li>
          <li><a href="pricing">Pricing</a></li>
          <li><a href="enhance">Enhance</a></li>
        </ul>
      </nav>
      <div className="footer-text">
        Ⓒ 2023 UpscalePics. All rights reserved.
      </div>
    </div>
  )
}

export default Footer