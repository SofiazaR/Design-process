import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>главная</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>чат</li>
        <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>о сайте</li>
        </ul>
        
        <div className="navbar-right">
            <div className="navbar-favorite-icon">
            <Link to="/favorite"><img src={assets.favorite_icon} alt="" className='favorite' /></Link>
            </div>
            <button>войти</button>
        </div>
    </div>
  ) 
}

export default Navbar