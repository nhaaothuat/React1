import React, {useEffect} from 'react'
import './blog.scss'
import Aos from "aos";
import 'aos/dist/aos.css'
import { BsArrowRightShort } from "react-icons/bs";

import img from "../../Assets/pexels-zhang-kaiyv-1434580.jpg"
import img2 from "../../Assets/pexels-nick-kwan-2614818.jpg"
import img3 from "../../Assets/pexels-zhang-kaiyv-1434580.jpg"
import img4 from "../../Assets/pexels-bagus-pangestu-1440476.jpg"

const Posts =[
  {
    id:1,
    postImage: img,
    title: 'Beautiful Morocco, let us travel!',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'

  },
  {
    id:2,
    postImage: img2,
    title: 'Beautiful Morocco, let us travel!',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'

  },
  {
    id:3,
    postImage: img3,
    title: 'Beautiful Morocco, let us travel!',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'

  },
  {
    id:4,
    postImage: img4,
    title: 'Beautiful Morocco, let us travel!',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines on the Atlantic Ocean and Mediterranean Sea.'

  },
]


const Blog = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experince in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id,postImage,title,desc})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
            <div className="imgDiv">
              <img src={postImage} alt={title} />
            </div>

            <div className="postDetails">
              <h3 data-aos="fade-up" data-aos-duration="3000">
              {title}
              </h3>
              <p data-aos="fade-up" data-aos-duration="4000">
                {desc}
              </p>
            </div>

            <a href="/" className='flex' data-aos="fade-up" data-aos-duration="4500">
           
              Read More
              < BsArrowRightShort className='icon'/> 
            </a>
          </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
