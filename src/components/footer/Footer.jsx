import React from 'react'
import './footer.css'
import myLogo from '../../assets/logoCResize001.png'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        <img src={myLogo} alt="My Logo" />
      </a>

      <ul className='permalinks'>
        <li key='1'><a href="#">Home</a></li>
        <li key='2'><a href="#about">About</a></li>
        <li key='3'><a href="#exp">Skills</a></li>
        <li key='4'><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <small>Developed By Mammen K Abraham Using React</small>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Mammen K Abraham</small>
      </div>
    </footer>
  )
}

export default Footer