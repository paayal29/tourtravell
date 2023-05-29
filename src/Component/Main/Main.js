import React from 'react';
import './Main.css';
import img from '../../images/thailand.jpg';
import img2  from '../../images/london.jpg';
import img3 from '../../images/kullu.jpg';
import img4 from '../../images/kashmir.jpg';
import {MdLocationOn} from "react-icons/md"
import {BsClipboardCheck} from "react-icons/bs"

const Main=()=>{
    const data=[
        {
            id:1,
            imgsrc:img,
            destitle:'hills',
            location:'thailand',
            grade:'cultural relax',
            fees:'$700',
            discription:'Handpicked Travels at the Best Prices on Earth. Enjoy VIP Inclusions and Bonus Extras. Dont miss out on a Travel to your dream destination.'
        },
            {
            id:2,
            imgsrc:img2,
            destitle:'london brige',
            location:'london',
            grade:'cultural relax',
            fees:'$900',
            discription:'One of the worlds most visited cities,London is also known as the financial hub of the world with major banks headquartered in the city.'
            },
            {
                id:3,
                imgsrc:img3,
                destitle:'Beas river',
                location:'kullu manali',
                grade:'cultural relax',
                fees:'$400',
                discription:'Manali is a town, near Kullu town in Kullu district in the Indian state of Himachal Pradesh. It is situated in the northern end of the Kullu Valley, formed by the Beas River.'
                },
                {
                    id:4,
                    imgsrc:img4,
                    destitle:'kashmir Dal lake',
                    location:'Kashmir',
                    grade:'cultural relax',
                    fees:'$300',
                    discription:' One of the most popular and beautiful lakes of Kashmir is Dal Lake. It is Srinagar’s jewel that offers outstanding view by reflecting the carved wooden balconies of the houseboats.'
                    }
        ]

    
    return(
        <section className='main container section'>
        <div className='section-title'>
         <h1 className='title'>most visited destination</h1>
         </div>
         <div className='section-content grid'>
          {
          data.map(({id,imgsrc,destitle,location,grade,fees,discription})=>{
            return(
            <div key={id} className='singledestination'>
            <div className='imgDiv'>
            <img src={imgsrc} alt={destitle}></img>
            </div>
           <div className='cardinfo'>
            <h4 className="destitle">{destitle}</h4>
            <span className='content flex'>
            <MdLocationOn className="icon-location"/></span>
            <span className='name'>{location}</span>
            <div className='fees flex'>
            <div className='grade'>
            <span>{grade}</span> <small>+1</small>
            </div>
            <div className='price'>
            <h5>{fees}</h5>
            </div>
            </div>
            <div className='disc'>
            <p>{discription}</p>
            </div>
            <button className='btn'>DETAILS<BsClipboardCheck className="icon-detail"/></button>

            </div>
            </div>
            

            )
          })
          }
        
        </div>
        
        
        </section>
    
    );
}
export default Main;