import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Social = () => {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/mammen-abraham-b45a37121' target='_blank'><BsLinkedin/></a>
        <a href='' target='_blank'><FaGithub/></a>
    </div>
  )
}

export default Social