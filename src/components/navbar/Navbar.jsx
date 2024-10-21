import React, { useEffect, useState } from 'react'
import "../navbar/nav.css"
import {Link} from "react-scroll";
import logo from "../../assets/logo.png"


const Navbar = () => {

  const [show, setShow] = useState(false)

  const showNavbar = () => {
    if(window.scrollY >= 100){
     setShow(true)
    } else {
      setShow(false)
    }
   
  }

  window.addEventListener('scroll', showNavbar)
  console.log("show", show);

  return (

    <div className={`${show ? "     transition-all duration-1000 ease-in-out block" : "hidden  "} `}>
        <div className='hidden md:block'>
            <div className=' flex  justify-center items-center text-white w-screen '>
          <ul className='glass-effect-button flex gap- justify-between font-light  text-base text-[#a4a0aa] ' >
            <Link  to="logo" spy={true} smooth={true} offset={-100} duration={500}>
            <li className='glass-effect-buttons lg:px-4 px-3 lg:py-2 py-1 lg:text-base text-sm rounded-3xl flex justify-center items-center mt-[2.7px] '>
                <img className='w-20' src={logo} alt="" />
              </li>
            </Link>
            
              <span className='  grbg-ay-900 bg-gradient-to-b from-[#0b011d]  via-[#3e2f5b] to-[#0b011d]  inline-block  min-h-[1em] w-px self-stretch bg-neutral-100 opacity-100 dark:opacity-50'></span>
            <Link to="vision"  spy={true} smooth={true} offset={-100} duration={500} >
                <li className='glass-effect-buttons lg:px-4 px-3 lg:py-2 py-1 lg:text-base text-sm rounded-3xl '>
              
                <p >Vision</p>
                </li>
            </Link>
            
            <Link to="service"  spy={true} smooth={true} offset={-10} duration={500}>
              <li className='glass-effect-buttons lg:px-4 px-3 lg:py-2 py-1 lg:text-base text-sm rounded-3xl '>
                <p   > Services</p>
              </li>
            </Link>
            
            <Link to="benifits"  spy={true} smooth={true} offset={-10} duration={500} >
            <li className='glass-effect-buttons lg:px-4 px-3 lg:py-2 py-1 lg:text-base text-sm rounded-3xl '>
                <p to="benifits"  spy={true} smooth={true} offset={-10} duration={500}  >Benefits</p>
              </li>
            </Link>
              
              <Link to="support"  spy={true} smooth={true} offset={50} duration={500}>
                <li className='glass-effect-buttons lg:px-4 px-3 lg:py-2 py-1 lg:text-base text-sm rounded-3xl '>
                <p   > Support</p>
              </li>
              </Link>
            
            <Link to="faqs"  spy={true} smooth={true} offset={50} duration={500}>
              <li className='glass-effect-buttons lg:px-4 px-3 lg:py-2 py-1 lg:text-base text-sm rounded-3xl '>
                <p  >FAQs</p>
              </li>
            </Link>
            
            <Link to="contact"  spy={true} smooth={true} offset={50} duration={500}>
            <li className='glass-effect-buttons lg:px-4 px-3 lg:py-2 py-1 lg:text-base text-sm rounded-3xl '>
                <p  >Contact</p>
              </li>
            </Link>
            
          </ul>
      </div>
      </div>
    </div>
   

  )
}

export default Navbar