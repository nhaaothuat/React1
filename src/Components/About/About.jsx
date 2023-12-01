import React,{useEffect} from 'react'
import './about.scss'
import Aos from "aos";
import 'aos/dist/aos.css'

import img from '../../Assets/pexels-sesinando-2410300.jpg'
import img2 from '../../Assets/pexels-nick-kwan-2614818.jpg'
import img3 from '../../Assets/pexels-pixabay-356844.jpg'

import video from "../../Assets/road_trip_-_739 (720p).mp4"

const About = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="section about section">
      <div className="secContainer">
        <h2 className="title">
          Why Hikings?
        </h2>

        <div  className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={img} alt="Name" />

            <h3>100+ Mountains</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms of
              daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={img2} alt="Name" />

            <h3>1000+ Hikings</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms of
              daily life reduces stress and improves health and well-being.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={img3} alt="Name" />

            <h3>2000+ Customer</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms of
              daily life reduces stress and improves health and well-being.
            </p>
          </div>
        </div>

      <div className="videoCard container">
        <div data-aos="fade-right" data-aos-duration="2000" className="cardContent grid">
          <div className="cardText">
            <h2>Wonderful House experience in 
              there!
            </h2>

            <p>
              The Adventure subranking is based on an
              equally weighted average of scores from
              five country
            </p>
          </div>

          <div  data-aos="fade-left" data-aos-duration="2000"  className="cardVideo">
            <video src={video} autoPlay loop muted type='video/mp4'></video>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default About
