import React from 'react';
import './footer.css';
import {BsLinkedin, BsTwitter} from 'react-icons/bs';
import {AiFillMediumSquare} from 'react-icons/ai';
import {FaAngellist} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>WAHAJ ALI</a>

      <ul className="permalinks">
        <li><a href="#">Home </a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/wahaj-ali96/"><BsLinkedin /></a>
        <a href="https://medium.com/@wahaj.ali96"><AiFillMediumSquare /></a>
        <a href="https://twitter.com/Ali96Wahaj"><BsTwitter /></a>
        <a href="https://angel.co/u/wahaj-ali96"><FaAngellist /></a>        
      </div>

      <div className="footer__copyright">
        <small>&copy; Wahaj Ali. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer