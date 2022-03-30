import React from 'react'
import './exp.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const Exp = () => {
  return (
    <section id='exp'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp__container">
        <div className="exp__front">
          <h3>Frontend Development</h3>
          <div className="exp__content">
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>TypeScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp__back">
        <h3>Backend Development</h3>
          <div className="exp__content">
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='exp__details'>
              <BsCheckCircleFill className="exp__details_icon"/>
              <div>
                <h4>Django - Python</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exp