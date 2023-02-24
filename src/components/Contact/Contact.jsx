import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className='contact_ions' />
              <h4>Email</h4>
              <h5>a.v.saini9999@gmail.com</h5>
              <a href="mailto:a.v.saini9999@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className='contact_ions'/>
              <h4>Messanger</h4>
              <h5>abhishek__02</h5>
              <a href="https://facebook.com/messanger/" target="_blank">Send a message</a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className='contact_ions'/>
              <h4>WhatsApp</h4>
              <h5>+91 8209743315</h5>
              <a href="https://api.whatsapp.com/send?phone+918209743315" target="_blank">Send a message</a>
            </article>
        </div>

        <form action=" ">
          <input type="text" name="name" id="" placeholder='Your Full Name' required/>
          <input type="email" name="email" id="" placeholder='Email' required/>
          <textarea name="messahe" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact