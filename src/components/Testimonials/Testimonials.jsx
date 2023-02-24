import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import {Pagination,Navigation} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    reviw : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate autem iusto minus ipsa incidunt animi modi magnam officia laudantium, iste et tempora quibusdam similique distinctio atque voluptate odit tenetur."
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    reviw : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate autem iusto minus ipsa incidunt animi modi magnam officia laudantium, iste et tempora quibusdam similique distinctio atque voluptate odit tenetur."
  },
  {
    avatar: AVTR3,
    name: "Kwame Despite",
    reviw : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate autem iusto minus ipsa incidunt animi modi magnam officia laudantium, iste et tempora quibusdam similique distinctio atque voluptate odit tenetur."
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown",
    reviw : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate autem iusto minus ipsa incidunt animi modi magnam officia laudantium, iste et tempora quibusdam similique distinctio atque voluptate odit tenetur."
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}      
      pagination={{clickable:true}}
      >
        {
          data.map(({avatar,name,reviw},index) => {
            return(
              <SwiperSlide key={index} className='testimonials'>
                <div className="clients_avatar">
                  <img src={avatar}  />
                </div>
                <h5 className='clients_name'>{name}</h5>
                <small className='clients_review'>{reviw}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials