import React from 'react'
import './about.css'
import myImage from '../../assets/logoCResize001.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={myImage} alt='my about image' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Company</h5>
              <small>Infosys</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Internship</h5>
              <small>ClusterDev</small>
              <div><small>Monlash</small></div>
            </article>
          </div>
          <p>
            Mammen K Abraham is a Senior Systems Engineer, with experience in Fullstack Development and managing Agile Team. His background is in Angular Frontend development and React Fullstack(MERN-stack). Mammen is fueled by his passion for understanding and learning new things. He considers himself a ‘forever student’.
            <p>
              Front-end developer with many experiences in software development and two years plus experience with Angular. Proficient in developing user interfaces and Single Page Applications. Hunger for knowledge and determination to turn information into action. 
            </p> 
          </p>
          <a href='#contact' className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About