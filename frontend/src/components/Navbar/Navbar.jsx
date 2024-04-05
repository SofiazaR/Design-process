import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><Link to="/">главная</Link></li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><Link to="/chat">чат</Link></li>
        </ul>
    </div>
  ) 
}

export default Navbar