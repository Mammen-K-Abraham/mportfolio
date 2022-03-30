import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef as UseRef  } from 'react';
import emailjs from '@emailjs/browser';


const contact = () => {

  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tyrl0gl', 'template_d5jd568', form.current, 'sQ9qhtb-EiQ9I89LO')
      .then((result) => {
          console.log(result.text);
          alert('Email Send. Do wait for a Replay. Thank You')
          e.target.reset();
      }, (error) => {
          console.log(error.text);
          alert('Email Send Not Successful. Thank You')
          e.target.reset();
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__icon'/>
            <h4>Email</h4>
            <h5>mammenkabraham@gmail.com</h5>
            <a href='mailto:mammenkabraham@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__icon'/>
            <h4>WhatsApp</h4>
            <a href="https://api.whatsapp.com/send?phone=+919447100043" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact