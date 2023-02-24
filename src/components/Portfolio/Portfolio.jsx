import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id:1,
    image: Img1,
    title:"Crypto Currency Dashboard & Financial Visualization",
    github: 'https://github.com/',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:2,
    image: Img2,
    title:"Charts templates & infograph in Figma",
    github: 'https://github.com/',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:3,
    image: Img3,
    title:"Financial Visualization",
    github: 'https://github.com/',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:4,
    image: Img4,
    title:"Crypto Currency Dashboard & Financial Visualization",
    github: 'https://github.com/',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:5,
    image: Img5,
    title:"Crypto Currency Dashboard & Financial Visualization",
    github: 'https://github.com/',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:6,
    image: Img6,
    title:"Crypto Currency Dashboard & Financial Visualization",
    github: 'https://github.com/',
    demo: 'https://dribbble.com/Alien_pixels'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Wprk</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_image">
                  <img src={image}  />
                </div>  
                <h3>{title}</h3>
                <div className="portfolio_cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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