import React from 'react'
import SubHeading from "/src/components/SubHeading/SubHeading";
import { images } from "../../constants";
import './FindUs.css';

function FindUs() {
  return (
    <div className='app__bg app__wrapper section__padding findus-section' id='contact'>
        <div className="app__wrapper_info">
            <SubHeading title="Contact"/>
            <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Find Us</h1>
            <div className="app__wrapper-content">
            <p className="p__opensans"></p>
             <p className="p__opensans">50-12 Vernon Blvd, LIC NY, 11101</p>   
             <p className="p__cormorant" style={{color: '#DCCA87', margin: '2rem 0'}}>Opening Hours</p>   
             <p className="p__opensans">Monday: 5:30pm - 10:30 pm</p>   
             <p className="p__opensans">Tue - Thur: 11:30 am - 3:00 pm</p>   
             <p className="p__opensans">5:30 pm - 10:30 pm</p>   
             <p className="p__opensans">Friday: 11:30 am - 3:00 pm</p>   
             <p className="p__opensans">5:30 pm - 11:00 pm</p>   
             <p className="p__opensans">Saturday: 11:00 am - 3:30 pm</p>   
             <p className="p__opensans">5:30 pm - 11:00 pm</p>   
             <p className="p__opensans">Sunday: 11:00 am - 3:30 pm</p>   
             <p className="p__opensans">5:00 pm - 10:00 pm</p>   
            </div>
        </div>

        <div className="app__wrapper_img">
            <img src={images.findus} alt="find us" />
        </div>
    </div>
  )
}

export default FindUs