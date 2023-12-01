import React ,{useEffect}from "react";
import "./popular.scss";
import Aos from "aos";
import 'aos/dist/aos.css'

import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import img2 from "../../Assets/pexels-zhang-kaiyv-189833.jpg"
import img5 from "../../Assets/pexels-zhang-kaiyv-1434580.jpg"
import img7 from "../../Assets/pexels-wolfram-k-745243.jpg"
import img9 from "../../Assets/pexels-sesinando-2410300.jpg"


const Data = [
    {
      id:1,
      imgSrc:img2,
      destTitle: 'Guanajuato',
      location: 'Mexico',
      grade: 'CUTURAL RELAX',
    },
    {
      id:2,
      imgSrc:img5,
      destTitle: 'Angkor Wat',
      location: 'Cambodia',
      grade: 'CUTURAL RELAX',
    },
    {
      id:3,
      imgSrc:img7,
      destTitle: 'Machu Pichu',
      location: 'Peru',
      grade: 'CUTURAL RELAX',
    },
    {
      id:4,
      imgSrc:img9,
      destTitle: 'Taj Mahal',
      location: 'India',
      grade: 'CUTURAL RELAX',
    },
]

const Popular = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              From historical cities to natural specteculars, come see the best
              of the world!
            </p>
          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,grade})=>{
              return(
                <div data-aos="fade-up"  className="singleDestination">
            <div className="destImage">
              <img src={imgSrc} alt="Title" />

              <div className="overlayInfo">
                <h3>{destTitle}</h3>
                <p>{location}</p>
                <BsArrowRightShort className="icon" />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">0{id}</div>

              <div className="destText flex">
                <h6>{location}</h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />
                  </span>
                  Miracle
                </span>
              </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Popular;
