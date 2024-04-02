import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

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
            <img src={assets.search_icon} alt="" className='search' />
            <div className="navbar-search-icon">
                <img src={assets.favorite_icon} alt="" className='favorite' />
            </div>
            <button>войти</button>
        </div>
    </div>
  )
}

export default Navbar