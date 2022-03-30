import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container ser__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Adobe XD</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Figma</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Website Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Angular</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>React</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>MERN/MEAN Stack</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Others</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Android</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>TKinter - Python</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Django - Python</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services