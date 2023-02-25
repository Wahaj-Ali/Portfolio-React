import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/bookstore.jpg';
import IMG2 from '../../assets/tv-hub.jpg';
import IMG3 from '../../assets/metrics-webapp.jpg';
import IMG4 from '../../assets/maths-magicians.jpg';
import IMG5 from '../../assets/first-capstone.jpg';
import IMG6 from '../../assets/portfolio4.jpg';

const data = [{
  id: 1,
  image: IMG1,
  title: 'Bookstore CMS',
  github: 'https://github.com/Wahaj-Ali/bookstore',
  demo: 'https://wahaj-bookstore.netlify.app/',
},
{
  id: 2,
  image: IMG2,
  title: 'TV Hub',
  github: 'https://github.com/Wahaj-Ali/tv-hub',
  demo: 'https://wahaj-ali.github.io/tv-hub/dist/',
},
{
  id: 3,
  image: IMG3,
  title: 'Metrics Webapp',
  github: 'https://github.com/Wahaj-Ali/metrics-webapp',
  demo: 'https://populaton-index-by-wahaj.netlify.app/',
},
{
  id: 4,
  image: IMG4,
  title: 'Math Magicians',
  github: 'https://github.com/Wahaj-Ali/maths-magicians',
  demo: 'https://wahaj-mathsmagician.netlify.app/',
},
{
  id: 5,
  image: IMG5,
  title: 'INTERNATIONAL PAK ORTHOCON 2022',
  github: 'https://github.com/Wahaj-Ali/Capstone-1',
  demo: 'https://wahaj-ali.github.io/Capstone-1/',
},
{
  id: 6,
  image: IMG6,
  title: 'Demo Project',
  github: '',
  demo: '',
},
];

const Portfolio = () => {
  return (
    <section id='porfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target="_blank">Source Code</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio