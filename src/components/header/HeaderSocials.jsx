import React from 'react';
import {BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/wahaj-ali96/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/wahaj-Ali" target="_blank"><BsGithub /></a>
        <a href="https://twitter.com/Ali96Wahaj" target="_blank"><BsTwitter /></a>
    </div>
  )
}

export default HeaderSocials