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
          <button className='btn-login' onClick={()=>setBurger(false)}><Link className='login'>yopish</Link></button>
          <input type="email"  placeholder='enter your email'/>
        </div>
       )

      }

    </header>
  )
}

export default Header