import React from 'react';
import './Home.css';
import video from '../../videos/travell.mp4';
import {RiMapPinFill} from "react-icons/ri";
import {BsFacebook} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"
import {SiTripadvisor} from "react-icons/si"
import {MdViewList} from "react-icons/md"
import {TbApps} from "react-icons/tb"
const Home=()=>{ 
    return(
       <section className='home'>
        <div className='overlay'></div>
        <video src={video} loop muted autoPlay type="travell.mp4"></video>
        <div className='homecontent container'>
         <div className='textdiv'>
         <span className='smalltext'>
          our packages
         </span>
         <h1 className='largetext'>
            Serach Your Holidays
         </h1>
         </div>
         <div className='CardDiv grid'>
         <div className='destination-input'>
          <label for="city">Serach Your destination:</label>
          <div className='input flex'>
          <input type='text' placeholder='enter name here....'></input>
          <RiMapPinFill className='mapicon'/>
          </div>
          </div>
          <div className='inputDate flex'>
          <label for="date">Select date:</label>
          <div className='Date'>
          <input type='date' placeholder='select date'></input>
          </div>
          </div>
          <div className='priceinput'>
          <div className='label-total'>
           <label htmlFor='price'>Max price:$5000</label>
           </div>
           </div>
           <div className='range'>
           <input type='range' max="5000" min="1000"/>
           </div>
           <div className='footer-icon flex'>
           <div className='left-icon'>
           <BsFacebook className='l-icon'/>
           <FaInstagramSquare className="l-icon"/>
           <SiTripadvisor className="l-icon"/>
           <MdViewList className="r-icon"/>
           <TbApps className="r-icon"/>
           </div>
           </div>
           </div>
          </div>
       </section>
    );
}
export default Home;