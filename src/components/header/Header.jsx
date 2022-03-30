import React from 'react'
import './header.css'
import Cta from './Cta'
import Social from './Social'
import myImage from '../../assets/meLongHairRemovebg001.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mammen K Abraham</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta/>
        <Social/>
        <div className="myImage">
          <img src={myImage} alt='My DP' />
        </div> 
        <a href='#contact' className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header