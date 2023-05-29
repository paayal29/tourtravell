import React from 'react';
import './Footer.css';
import video2 from '../../videos/tour.mp4';
import {FiSend} from "react-icons/fi"
import {IoLogoYoutube} from "react-icons/io"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {MdKeyboardArrowRight} from "react-icons/md"

const Footer=()=>{
    return(
        <section className='footer'>
       <div className='videoDiv'>
       <video src={video2} loop muted autoPlay type="tour.mp4"></video>
       </div>
       <div className='secContent container'>
       <div className='contactDiv flex'>
       <div className='text'>
       <small>KEEP IN TOUCH</small>
       <h2>Travell With Us</h2>
      </div>
      <div className='inputDiv flex'>
      <input type='text' placeholder='enter your emai adress'></input>
      <button className='btn'><FiSend className="iconSend"/>Send</button>
      </div>
      </div>
      <div className='footerCard'>
      <div className='footericon'>
      <AiOutlineTwitter className="icon"/>
      <IoLogoYoutube className="icon"/>
      <AiFillInstagram className="icon"/>
      </div>
      </div>
      <div className='selectfooter'>
      <div className='listfooter'>
      <span className='optionfooter'>OUR Services</span>
      <li className='linkfooter'><MdKeyboardArrowRight className="icon"/>Services</li>
      <li className='linkfooter'><MdKeyboardArrowRight className="icon"/>Agency</li>
      <li className='linkfooter'><MdKeyboardArrowRight className="icon"/>Tourism</li>
      <li className='linkfooter'><MdKeyboardArrowRight className="icon"/>payment</li>
      </div>
      
      <div className='listfooter-2'>
      <span className='optionfooter'>Partner</span>
      <li className='linkfooter'><MdKeyboardArrowRight className="icon"/>Bookings</li>
      <li className='linkfooter'><MdKeyboardArrowRight className="icon"/>Rentcars</li>
      <li className='linkfooter'><MdKeyboardArrowRight className="icon"/>Trivogos</li>
      <li className='linkfooter'><MdKeyboardArrowRight className="icon"/>Advisors</li>
      </div>
      </div>
      </div>
     
      
      
       </section>
    );
}
export default Footer;