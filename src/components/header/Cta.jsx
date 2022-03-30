import React from 'react'
import Resume from '../../assets/MammenResume.pdf'

const Cta = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default Cta