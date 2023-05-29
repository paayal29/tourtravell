import React from 'react';
import './Navbar.css';
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";
import { useState } from 'react';
const Navbar=()=>{
  const [active,setActive]=useState('menu-bar')
  //function toggle menu-bar
  const showNav=()=>{
    setActive('menu-bar activeMenubar')
  }
  //functon remove menubar
  const removeNav=()=>{
    setActive('menu-bar')
  }
    return(
           <section className="section">
            <header className='header'>
             <div className='logo-Div'>
             <a href='#logo'><h1 className='logo'><MdOutlineTravelExplore className="icon"/> Travell</h1></a>
             </div>
             <div className={active}>
              <ul className='list-menu flex'>
              <li className='list'>
              <a href="#Home" className='navlink'>Home</a>
              </li>

              <li className='list'>
                <a href="#About" className='navlink'>About</a>
              </li>
              <li className='list'>
                <a href="#Shop" className='navlink'>Shop</a>
              </li>

              <li className='list'>
                <a href="#Pages" className='navlink'>Pages</a>
              </li>

              <li className='list'>
                <a href="#News" className='navlink'>News</a>
              </li>
              
              <li className='list'>
                <a href="#Contact" className='navlink'>Contact</a>
              </li>

              <button className='btn'><a href='#button'>Book Now</a></button>
              </ul>
              <div onClick={removeNav} className='close-icon'>
              <AiFillCloseCircle className='icon'/>
              </div>
             </div>
             <div onClick={showNav} className='toggle'>
             <TbGridDots className="icon"/>
             </div>
            </header>
           </section> 
    );
}
export default Navbar;