import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';

const Contatc = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>wahaj.ali96@yahoo.com</h5>
            <a href="mailto:wahaj.ali96@yahoo.com">Send A Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineMail />
            <h4>Messanger</h4>
            <h5>wahaj.ali96@yahoo.com</h5>
            <a href="mailto:wahaj.ali96@yahoo.com">Send A Message</a>
          </article>

          <article className="contact__option">
            <AiOutlineMail />
            <h4>Email</h4>
            <h5>wahaj.ali96@yahoo.com</h5>
            <a href="mailto:wahaj.ali96@yahoo.com">Send A Message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contatc