import React ,{useEffect}from 'react'
import './offer.scss'
import Aos from "aos";
import 'aos/dist/aos.css'

import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img6 from "../../Assets/pexels-pixabay-237211.jpg"
import img7 from "../../Assets/pexels-pixabay-259772.jpg"
import img8 from "../../Assets/pexels-pixabay-356844.jpg"


const Offers = [
  {
    id:1,
    imgSrc: img8,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    price: '$7,452' 
  },
  {
    id:1,
    imgSrc: img6,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    price: '$7,452' 
  },
  {
    id:3,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    price: '$7,452' 
  },
]

const Offer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of
            the world!
          </p>
        </div>

        <div className="mainContent grid">
          {
            Offers.map(({imgSrc,location,destTitle,price})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
            <div className="destImage">
              <img src={imgSrc} alt={destTitle}/>

              <span className="discount">
                30% Off
              </span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>
                  {price}
                </h4>
                <span className="status">
                  For Rent
                </span>
              </div>

              <div className="amenities flex">
                <div className="singleAmenity flex">
                <MdKingBed className='icon'/>
                <small>2 Beds</small>
                </div>

                <div className="singleAmenity flex">
                <MdBathtub className='icon'/>
                <small>1 Bath</small>
                </div>
                <div className="singleAmenity flex">
                <FaWifi className='icon'/>
                <small>Wi-fi</small>
                </div>
                <div className="singleAmenity flex">
                <MdAirportShuttle className='icon'/>
                <small>Shuttle</small>
                </div>
              </div>

              <div className="location flex">
              <MdLocationPin className='icon'/>
              <small>450 Vine #310, {location}</small>
              </div>

              <button className='btn flex'>
                 View Details
                 <BsArrowRightShort className='icon'/>
              </button>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Offer
