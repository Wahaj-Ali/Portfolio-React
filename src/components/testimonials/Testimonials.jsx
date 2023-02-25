import React from 'react';
import './testimonials.css';
import AVATAR1 from '../../assets/avatar1.jfif';
import AVATAR2 from '../../assets/avatar2.jfif';
import AVATAR3 from '../../assets/avatar3.jfif';
import AVATAR4 from '../../assets/avatar4.jfif';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVATAR1,
    name: 'Lucas Erkana',
    review: "We have worked together on several projects, and I found him a highly skilled and dedicated professional. His expertise in the field of HTML/CSS, JAVASCRIPT, AND REACT has helped our company immensely. He's also an all-around great guy to work with! I highly recommend him to anyone looking for help on their team or HTML/CSS, JAVASCRIPT, AND REACT project.",
  },
  {
    avatar: AVATAR2,
    name: 'Billy Mohajeri',
    review: "We've collaborated on a number of projects together, and I've always found Wahaj to be a really talented and committed professional. His knowledge in software development has been really beneficial to our team. Additionally, he's a fantastic guy all around! To anyone searching for assistance with their team or software projects, I highly suggest him.",
  },
  {
    avatar: AVATAR3,
    name: 'Utsargo Roy',
    review: "I had the pleasure of working with him on several projects and was consistently impressed by his technical expertise and dedication to producing quality work. He has a strong understanding of software architecture and is always seeking out ways to optimize and improve the code. Wahaj also has great communication skills, making it easy to collaborate with him on projects. He's always willing to lend a hand or provide guidance to his team members, making him a great team player. He has a positive attitude making even the most challenging projects enjoyable. He will be a valuable addition to any team and I am confident that he will exceed expectations in any role he takes on.",
  },
  {
    avatar: AVATAR4,
    name: 'Md Tariq-ul Islam',
    review: "I had the pleasure of working with Wahaj Ali and I highly recommend him for his position. Wahaj consistently demonstrates a strong work ethic and exceptional skill. He is a quick learner and always strives to exceed expectations. Wahaj Ali has a unique ability to quality. This, combined with his exceptional communication skills, makes him a valuable asset to any team. He has a positive attitude and is always willing to go above and beyond to help others. ",
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Coding Partners</h5>
      <h2>Recommendations</h2>


      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container container__testimonials"
      >
        {
          data.map(({ avatar, name, review}, index ) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="partner__avatar">
                  <img src={avatar} alt={avatar} />
                </div>
                <h5>{name}</h5>
                <small className='partner__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials