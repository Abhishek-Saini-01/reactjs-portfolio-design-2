import React from 'react'
import CTA from './CTA'
import './Header.css'
import Me from "../../assets/me.png"
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Hajia  Bintu</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <HeaderSocial />


        <div className="me">
          <img src={Me} />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header