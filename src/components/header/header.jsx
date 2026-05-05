import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Heaer.css'
import Family from '../header/images/family.png'
import Thunder from '../header/images/thunder.png'

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
        <button className='btn-login' onClick={()=>setBurger(true)}><Link className='login'>Login</Link></button>
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

    <div>
      <div>
        <p>Find out more</p>
        <p>about how we work</p>
      </div>
      <div>
        <button>how we work</button>
      </div>
    </div>
   </> 
  )
}

export default Header