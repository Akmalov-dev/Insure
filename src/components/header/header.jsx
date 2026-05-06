import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Heaer.css'
import Family from '../header/images/family.png'
import Thunder from '../header/images/thunder.png'
import { FaBars } from "react-icons/fa";
import Git from '../header/images/github.svg'
import Linkedin from '../header/images/linkedin.webp'
import Insta from '../header/images/insta.webp'

const Header = () => {
  const [burger , setBurger] = useState(false);
  return (
   <>
       <header className="header">
      <div className="logo">INSURE</div>
      <nav className="nav">
        <Link to="/home">HOW WE WORK</Link>
        <Link to="/about">BLOG</Link>
        <Link to="/contact">ACCOUNT</Link>
      </nav>
      <div>
         <FaBars onClick={()=>setBurger(true)}/>
      </div>

      {
       burger && (
        <div className='onclick'>
          <button className='btn-login1' onClick={()=>setBurger(false)}><Link className='login1'>X</Link></button>
          <input type="email"  placeholder='Email' className='email-input'/>
          <input type="password" placeholder='Password' className='input-password'/>
          <input type="date" className='input-date'/> 
          <input type="submit" className='btn-submit'/>
        </div>
       )
      }
    </header>

    <div className='header-container'>
      <div className='header-fonts'>
        <p className='f-insurance'>Humanizing your insurance.</p>
        <p className='f-get'>Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
        <button className='btn-plans'>view plans</button>
      </div>
      <div>
        <img className='img-family' src={Family} alt="" />
      </div>
    </div>


    <p className='f-different'>We're different</p>

    <div className='different'>
      <div className='process'>
        <img className='img-thunder' src={Thunder} alt="" />
        <p className='f-snappy'>Snappy Process</p>
        <p className='f-our'>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
      </div>
        <div className='process'>
        <img className='img-thunder' src={Thunder} alt="" />
        <p className='f-snappy'>Snappy Process</p>
        <p className='f-our'>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
      </div>
        <div className='process'>
        <img className='img-thunder' src={Thunder} alt="" />
        <p className='f-snappy'>Snappy Process</p>
        <p className='f-our'>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
      </div>
    </div>

    <div className='middle'>
      <div className='font-middle'>
        <p className='f-find'>Find out more</p>
        <p className='f-about'>about how we work</p>
      </div>
      <div>
        <button className='btn-how'>how we work</button>
      </div>
    </div>

    <div className='footer-links'>
      <div>
        <p className='logo1'>INSURE</p>
      </div>
      <div>
        <a href="https://github.com/"><img className='git' src={Git} alt="" /></a>
        <a href="https://www.linkedin.com/"><img className='linkedin' src={Linkedin} alt="" /></a>
        <a href="https://www.instagram.com/"><img className='insta' src={Insta} alt="" /></a>
      </div>
    </div>
    <hr />

    <div className='footer'>
      <div className='final'>
        <Link>OUR COMPANY</Link>
        <Link>HOW WE WORK</Link>
        <Link>WHY ISNURE?</Link>
      </div>
        <div className='final'>
        <Link>OUR COMPANY</Link>
        <Link>HOW WE WORK</Link>
        <Link>WHY ISNURE?</Link>
      </div>
        <div className='final'>
        <Link>OUR COMPANY</Link>
        <Link>HOW WE WORK</Link>
        <Link>WHY ISNURE?</Link>
      </div>
        <div className='final'>
        <Link>OUR COMPANY</Link>
        <Link>HOW WE WORK</Link>
        <Link>WHY ISNURE?</Link>
      </div>
    </div>
   </> 
  )
}

export default Header