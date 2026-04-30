import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Heaer.css'

const Header = () => {
  const [burger , setBurger] = useState(false);
  return (
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
          <button className='btn-login1' onClick={()=>setBurger(false)}><Link className='login'>X</Link></button>
          <input type="email"  placeholder='Email' className='email-input'/>
          <input type="password" placeholder='Password' className='input-password'/>
          <input type="date" className='input-date'/> 
          <input type="submit" className='btn-submit'/>
        </div>
       )

      }

    </header>
  )
}

export default Header