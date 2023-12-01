import React from 'react'
import './footer.scss'

import { SiYourtraveldottv } from "react-icons/si";
import { ImFacebook } from "react-icons/im";
import { CiInstagram } from "react-icons/ci";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="/" className='logo flex'>
            
            <h1><SiYourtraveldottv className='icon' />Miracle</h1>
            </a>
          </div>

          <div className="socials flex">
          <ImFacebook className='icon' />
          <CiInstagram className='icon' />
          <IoLogoTwitter className='icon' />
        </div>
        </div>

       <div className="footerLinks">
        <span className="linkTitle">
          Information
        </span>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Explore</a>
        </li>
        <li>
          <a href="/">Travel</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        
       </div>
      
       <div className="footerLinks">
        <span className="linkTitle">
          Helpful Links
        </span>
        <li>
          <a href="/">Destination</a>
        </li>
        <li>
          <a href="/">Support</a>
        </li>
        <li>
          <a href="/">Travel and Conditons</a>
        </li>
        <li>
          <a href="/">Privacy</a>
        </li>
        
       </div>


       <div className="footerLinks">
        <span className="linkTitle">
          Contact us  
        </span>
        <span className='phone'>+444 565 6655 </span>
        <span className='email'>hienphannguyenxuan@gmail.com </span>
        
       </div>
      </div>
    </div>
  )
}

export default Footer
