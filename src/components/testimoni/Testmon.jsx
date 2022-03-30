import React from 'react'
import './testmon.css'
import clusterDevLogo from '../../assets/cDLogo.webp'
import infosysLogo from '../../assets/infosysLogo.png'


// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:infosysLogo,
    name:'Infosys',
    role:'Senior Systems Engineer'
  },
  {
    avatar:infosysLogo,
    name:'Infosys',
    role:'Systems Engineer'
  },
  {
    avatar:clusterDevLogo,
    name:'ClusterDev',
    role:'Software Engineer Intern'
  }
]

const Testmon = () => {
  return (
    <section id='testmon'>
      <h5>I played</h5>
      <h2>Roles</h2>
      <Swiper className="container test__container" modules={[Pagination]}
        spaceBetween={40} slidesPerView={1} pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,role},index)=>{
            return(
              <SwiperSlide key={index} className='test'>
                <div className="company__av">
                  <img src={avatar} alt='Logo'/>
                </div>
                <h5 className='company__name'>{name}</h5>
                <small className='company__role'>{role}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testmon