import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project 1</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project 2</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project 3</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project 4</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project 5</p>
            </li>
          </ul>
        </article>

        {/* new service  */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Personal Portfolio</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Bookstore CMS</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>TV Hub</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Metrics Webapp</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Math Magicians</p>
            </li>
          </ul>
        </article>

        {/* new service  */}
        <article className="service">
          <div className="service__head">
            <h3>Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Codekit</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Github</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Codepen</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Gitlab</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Terminal</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services