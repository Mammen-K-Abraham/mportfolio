import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Exp from './components/exp/Exp'
// import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Testmon from './components/testimoni/Testmon'
import Footer from './components/footer/Footer'

const app = () => {
  return (
    <>
      < Header/>
      < Nav/>
      < About/>
      < Exp/>
      < Services/>
      {/* < Portfolio/> */}
      < Testmon/>
      < Contact/>
      < Footer/>
    </>
  )
}

export default app