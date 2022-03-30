import React from 'react'
import './portfolio.css'

const data = [
  {
    id:1,
    image:'imageName.png',
    title:'Project Title',
    github:'',
    demo:''
  },
  {
    id:2,
    image:'imageName.png',
    title:'Project Title 2',
    github:'',
    demo:''
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container port__container">
       {
         data.map(({id,image,title,github,demo})=>{
           return(
            <article key={id} className='port__item'>
              <div className="port__item_image"></div>
              <h3>{title}</h3>
              <div className="port__item_ct">
                {/* <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>  */}
              </div>
            </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio