import React from 'react';
import './nav.css';
import {BiHomeCircle, BiUserCircle} from 'react-icons/bi';
import {MdOutlineSpeakerNotes} from 'react-icons/md';
import {RiServiceFill} from 'react-icons/ri';
import {IoMdContact} from 'react-icons/io';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeCircle /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserCircle /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineSpeakerNotes /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
    </nav>
  )
}

export default Nav